const db = require("../models");
const Libro = db.libros;

// Crear y guardar nuevo libro
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Libro
  const libro = new Libro({
    title: req.body.title,
    autor: req.body.autor,
    genero: req.body.genero,
    editorial: req.body.editorial,
    cantidad: req.body.cantidad,
    precio: req.body.precio,

    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Guardar libro en base de datos
  libro
    .save(libro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Libro."
      });
    });
};

// Retrieve all Libros from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Libro.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Libros."
      });
    });
};

// Find a single Libro with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Libro.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Libro with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Libro with id=" + id });
    });
};

// Update a Libro by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Libro.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Libro with id=${id}. Maybe Libro was not found!`
        });
      } else res.send({ message: "Libro was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Libro with id=" + id
      });
    });
};

// Delete a Libro with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Libro.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Libro with id=${id}. Maybe Libro was not found!`
        });
      } else {
        res.send({
          message: "Libro was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Libro with id=" + id
      });
    });
};

// Delete all Libros from the database.
exports.deleteAll = (req, res) => {
  Libro.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Libros were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Libros."
      });
    });
};

// Find all published Libross
exports.findAllPublished = (req, res) => {
  Libro.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving libros."
      });
    });
};
