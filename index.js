// const express = require("express");
const fs = require("fs");
const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Hello World Api",
    description: "Description",
  },
  tags: [
    {
      name: "Events Public",
      description: "Endpoints related to events accessible without account",
    },
  ],
  deepLinking: true,
  host: "http://localhost:3000",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

// With both these files, the method name POST will be generated
// Remove the  "routes/events/create_event.js", entry and you will then see the code for GET method
const files = [
  "routes/events/get_all_events.js",
  "routes/events/create_event.js",
];

swaggerAutogen()("swagger.json", files, doc)
  .then(console.log)
  .catch(console.warn);
