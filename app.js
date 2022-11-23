const mongoose = require('mongoose')

const url = 'mongodb://localhost/mongo1_curso'

mongoose.connect(url, {
    //aqui parametros de mongoose

    })
.then( ()=> console.log('Conectado a mongo'))
.catch( (e)=> console.log('el error de conexion es: ' + e))


// crear const esquema libros
const libroSchema = mongoose.Schema({
    autor:String,
    genero:String,
    año:Number
}, {versionKey:false})


//crear model
const LibroModel = mongoose.model('libros', libroSchema)


//mostrar
const mostrar = async ()=> {
    const libros = await LibroModel.find()
    console.log(libros)
}


//crear libro
const crear = async ()=>{
    const libro = new LibrosModel({
        autor:gabriel,
        genero:ficcion,
        año:1992    
    })
    const resultado = await persona.save()
    console.log(resultado)
}
//mostrar()


//editar
const actualizar = async (id)=>{
    const persona = await LibroModel.updateOne({_id:id},
    {
        $set:{
            nombre:'Alberto modificado',
            genero: 'terror modificado'
        }
    })
}
//actualizar('aquiidgeneradoenmongodb')


//eliminar
const eliminar = async (id)=>{
    const libro = await LibroModel.deleteONe({id:id})
    console.log('persona')
}
//eliminar('aquiidparaeliminardemongodb')


