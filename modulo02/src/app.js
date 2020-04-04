
import express from "express";
import path from 'path'
import Youch from 'youch'
import * as Sentry from '@sentry/node'
import 'express-async-errors'
import routes from "./routes";
import SentryConfig from './config/sentry'
import './database';

class App {
    constructor() {
        this.sever = express();
        Sentry.init(SentryConfig)
        this.middlewares();
        this.routes();
        this.exceptionHandler()
    }

    middlewares() {
        this.sever.use(Sentry.Handlers.requestHandler());
        this.sever.use(express.json());
        this.sever.use('/flies', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
    }

    routes() {
        this.sever.use(routes);
        this.sever.use(Sentry.Handlers.errorHandler());
    }

    exceptionHandler() {
        this.sever.use(async (err, req, res, next) => {

            const erros = await new Youch(err, req).toJSON()

            return res.status(500).json(erros)

        })
    }

}

export default new App().sever;
