module.exports = app => {
  const libros = require("../controllers/libro.controller.js");

  var router = require("express").Router();

  // Create a new Libro
  router.post("/", libros.create);

  // Retrieve all Libros
  router.get("/", libros.findAll);

  // Retrieve all published Libros
  router.get("/published", libros.findAllPublished);

  // Retrieve a single Libro with id
  router.get("/:id", libros.findOne);

  // Update a Libro with id
  router.put("/:id", libros.update);

  // Delete a Libro with id
  router.delete("/:id", libros.delete);

  // Create a new Libro
  router.delete("/", libros.deleteAll);

  app.use("/api/libros", router);
};
