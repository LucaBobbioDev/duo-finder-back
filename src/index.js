//Definindo o express
const express = require('express')

//Criando a aplicação
const app = express()

//Declarando a porta
const port = 3000

//req -> soliticação
//res -> resposta
app.get('/', (req, res) => {
    res.send('Server is on!')
  })

app.listen(port, () => {
    console.log(`Servidor funcionando com conexão local na porta: ${port}`)
  })