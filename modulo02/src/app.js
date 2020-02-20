import express from "express";
import routes from "./routes";

class App {
    constructor() {
        this.sever = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.sever.use(express.json());
    }

    routes() {
        this.sever.use(routes);
    }
}

export default new App().sever;
