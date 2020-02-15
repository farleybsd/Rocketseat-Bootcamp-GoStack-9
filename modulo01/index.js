const express = require('express')
const server = express()
server.use(express.json())
// Query params = ?teste=1
// Route params = /users/1
//Request body = {"name": "Farley Rufino", "e-mail": "farley.t.i@hotmail.com"}

const users =['Farley','Enock','Marcia']


server.use((req,res,next)=>{

    //log
    console.time('Request')
    console.log(`Método: ${req.method}; URL: ${req.url}`)
     next()
     console.timeEnd('Request')
})


function checkUserExists(req,res,next){
    if(!req.body.name){
        return res.status(400).json({error: 'Name not found on request body'})
    }

    return next()
}

function checkUserinArray(req,res,next){

    const user = users[req.params.index]

    if(!user){
        return res.status(400).json({error:'User does not exists'})
    }

    req.user = user
    return next()
}

server.delete('/users/:index',checkUserinArray,(req,res)=>{

    const {index} = req.params
    users.splice(index,1)
    return res.send()
})

server.put('/users/:index',checkUserExists,checkUserinArray,(req,res)=>{
    const {index} = req.params
    const {name} = req.body
    users[index]= name
    return res.json(users)
})


server.post('/users',checkUserExists,(req,res)=>{

    const {name}= req.body
    users.push(name)
    return res.json(users)
})

server.get('/users',(req,res)=>{
    return res.json(users)
})


server.get('/users/:index',checkUserinArray,(req,res) =>{
    
    return res.json(req.user)
})

server.listen(3000,function(){
    console.log('Olá ser Servidor está Rodando :-)')
})