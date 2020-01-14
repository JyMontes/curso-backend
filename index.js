'use strict'

const express = require('express')
const colors = require('colors')

const app = express()

app.get('/',(req, res)=>{
    res.send('todo correcto en raiz crack :D').status(200);
})

app.get('/nombre',(req, res)=>{
  res.send('Hola mi nombre es Jyael').status(200)
    
})


app.listen(8000, () => {
    console.log(colors.rainbow('Felicidades tu aplicacion esta corriendo en http://localhost:8000 :D'))
})
