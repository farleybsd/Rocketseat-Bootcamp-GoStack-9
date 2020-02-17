const express = require('express')
const routes = require('./routes')

class App
{
    constructor()
    {
     this.sever = express()   
     this.middlewares()
     this.routes()
    }

    middlewares()
    {
        this.sever.use(express.json())
    }

    routes()
    {
        this.sever.use(routes)
    }
}

module.exports = new App().sever