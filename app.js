const mongoose = require('mongoose')

const url = 'mongodb://localhost/mongo1_curso'

mongoose.connect(url, {
    })
.then( ()=> console.log('Conectado a mongo'))
.catch( (e)=> console.log('el error de conexion es: ' + e))