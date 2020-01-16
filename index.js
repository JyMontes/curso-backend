'use strict'

const express = require('express')
const colors = require('colors')
const bodyParser= require('body-parser')

const app = express()

app.use((req , res, next) =>{
    res.header('Access-Control-Allow-Origin','*')
    //Acceso desde cualquier origen

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Withd, Content-Type, Accept, x-auth-token') 
    //Aceptar cualquier peticion de cualquier usuario y de cualquier origen, no importa si esta autenticado o no


    res.header('Acces-Control-Expose-Headers', 'x-auth-token')
    //Exponer todas las configuraciones de los headers anteriores

    next() //intermediario o middlewear, es como un aceptar terminos y condiciones entre servidor y usuario

})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/',(req, res)=>{
    res.send('todo correcto en raiz crack :D').status(200);
})

app.get('/nombre',(req, res)=>{
  res.send('Hola mi nombre es Jyael').status(200)
    
})

app.post('/obtenerNombre',(req, res) =>{
    var name = req.body.name
    var apellido=req.body.lastName

    res.send(`Hola ${name} ${apellido}. Como estas?`).status(200)
})

app.listen(8000, () => {
    console.log(colors.rainbow('Felicidades tu aplicacion esta corriendo en http://localhost:8000 :D'))
})
