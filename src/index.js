//Definindo o express
const express = require('express')

//Criando a aplicação
const app = express()

//dotenv
require('dotenv').config()

//Porta da aplicação
const port = process.env.SERVER_PORT

//req -> soliticação
//res -> resposta
app.get('/', (req, res) => {
    res.send('Server is on!')
  })

app.listen(port, () => {
    console.log(`Servidor funcionando com conexão local na porta: ${port}`)
  })