module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id_libro: String,
      titulo: String,
      autor: String,
      genero: String,
      fecha_publicacion: String,
      editorial: String,
      cantidad: String,
      precio: String,
      titulo: String,

      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Libro = mongoose.model("libro", schema);
  return Libro;
};
