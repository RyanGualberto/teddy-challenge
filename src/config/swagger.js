const swaggerAutogen = require("swagger-autogen")();

const host = PROCESS.ENV.API_HOST || "localhost:3333";
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./server.js"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Teddy Challenge - Open Food Facts API",
    description: "Documentação da API do desafio Teddy",
  },
  host: host,
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Products",
      description: "Endpoints relacionados aos produtos",
    },
    {
      name: "Root",
      description: "Endpoints relacionados à raiz da API",
    },
  ],
  definitions: {
    RootInfo: {
      status: "OK", // "OK" | "ERROR
      databaseConnection: "OK", // "OK" | "ERROR
      cronLastExecuted: "16/11/2023, 09:56:04",
      uptime: "0h 8m 11s",
      memoryUsage: {
        rss: "55.60 MB",
        heapTotal: "19.88 MB",
        heapUsed: "18.32 MB",
      },
    },
    Product: {
      _id: "6554af00d835c8762e733cef",
      code: 17,
      status: "TRASH",
      imported_t: "2023-11-16T12:50:10.653Z",
      url: "http://world-en.openfoodfacts.org/product/0017",
      creator: "openfoodfacts-contributors",
      created_t: 1585951158,
      last_modified_t: 1585951160,
      product_name: "",
      quantity: "",
      brands: "",
      categories: "",
      labels: "",
      cities: "",
      purchase_places: "",
      stores: "",
      ingredients_text: "",
      traces: "",
      serving_size: "",
      serving_quantity: null,
      nutriscore_score: null,
      nutriscore_grade: "",
      main_category: "",
      image_url:
        "https://static.openfoodfacts.org/images/products/0017/front_en.3.400.jpg",
      __v: 0,
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
