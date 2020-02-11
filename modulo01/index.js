const express = require('express')
const server = express()

server.get('/teste',(req,res) =>{
    return res.json({msg:"hello word"})
})

server.listen(3000,function(){
    console.log('Olá ser Servidor está Rodando :-)')
})