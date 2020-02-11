const express = require('express')
const server = express()

// Query params = ?teste=1
// Route params = /users/1
//Request body = {"name": "Farley Rufino", "e-mail": "farley.t.i@hotmail.com"}


server.get('/teste',(req,res) =>{
    const nome = req.query.nome
    return res.json({msg:`Hello ${nome}`})
})

server.listen(3000,function(){
    console.log('Olá ser Servidor está Rodando :-)')
})