const express = require('express')
const server = express()

// Query params = ?teste=1
// Route params = /users/1
//Request body = {"name": "Farley Rufino", "e-mail": "farley.t.i@hotmail.com"}


server.get('/users/:id',(req,res) =>{
    const id = req.params.id
    return res.json({msg:`Buscando o Id ${id}`})
})

server.listen(3000,function(){
    console.log('Olá ser Servidor está Rodando :-)')
})