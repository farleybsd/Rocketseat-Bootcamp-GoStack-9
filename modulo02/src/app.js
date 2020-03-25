import express from "express";
import path from 'path'
import routes from "./routes";
import './database';

class App {
    constructor() {
        this.sever = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.sever.use(express.json());
        this.sever.use('/flies', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
    }

    routes() {
        this.sever.use(routes);
    }
}

export default new App().sever;
