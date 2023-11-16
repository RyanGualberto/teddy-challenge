const axios = require("axios");
const readline = require("readline");
const zlib = require("zlib");

const ProductsRepository = require("../repositories/products.repository");
const UpdateHistoryRepository = require("../repositories/update-history.repository");

const productsRepository = new ProductsRepository();
const updateHistoryRepository = new UpdateHistoryRepository();

const apiBaseUrl = "https://challenges.coode.sh/food/data/json";

const filesUrl = `${apiBaseUrl}/index.txt`;

async function log(message) {
  console.log(message);
}

async function downloadAndProcessFile(fileName, lastProcessedDate) {
  const fileUrl = `${apiBaseUrl}/${fileName}`;

  try {
    const response = await axios.get(fileUrl, { responseType: "stream" });
    const gunzip = zlib.createGunzip();
    const fileStream = response.data.pipe(gunzip);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    log(`Início da importação do arquivo ${fileName}`);

    for await (const line of rl) {
      try {
        const product = JSON.parse(line);
        const date = new Date();
        const productModifiedAt = new Date(product.last_modified_t * 1000);

        product.code = +product.code.replace(/\W/g, "");

        if (productModifiedAt < lastProcessedDate) {
          continue;
        }

        log(`Importando produto com o código ${product.code}`);
        product.imported_t = date;
        product.status = "published";

        await productsRepository.create(product);
        await updateHistoryRepository.update({ lastProcessedDate: date });
      } catch (parseError) {
        console.error(
          `Erro ao analisar JSON na linha: ${line}. Erro: ${parseError.message}`
        );
      }
    }

    log(`Importação do arquivo ${fileName} concluída.`);
  } catch (error) {
    console.error(
      `Erro ao baixar ou processar o arquivo ${fileName}: ${error.message}`
    );
  }
}

async function loadProducts() {
  try {
    log("Início da importação");

    const lastUpdateHistoryAlreadyExists =
      await updateHistoryRepository.getLast();
    const indexResponse = await axios.get(filesUrl);
    const fileNames = indexResponse.data.trim().split("\n");

    if (
      !lastUpdateHistoryAlreadyExists ||
      lastUpdateHistoryAlreadyExists.status === "FINISHED"
    ) {
      await updateHistoryRepository.create({
        lastProcessedDate: new Date(),
        status: "IN_PROGRESS",
      });
    }

    for (const fileName of fileNames) {
      const lastUpdateHistory = await updateHistoryRepository.getLast();
      log(`Baixando arquivo ${fileName}`);
      await downloadAndProcessFile(
        fileName,
        lastUpdateHistory.lastProcessedDate
      );
    }

    await updateHistoryRepository.update({ status: "FINISHED" });
    log("Importação de dados concluída.");
  } catch (error) {
    console.error("Erro na requisição:", error.message);
  }
}

module.exports = { loadProducts };
