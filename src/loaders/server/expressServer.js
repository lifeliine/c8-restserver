const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');
const config = require('../../config');
const logger = require('../logger');
class ExpressServer {

    constructor() {
        this.app = express();
        this.port = config.port;
        this.basePath = `${config.api.prefix}/users`;
        this._middelware();
        this._routes();
        this._notFound();
        this._errorHandler();
    }


    _middelware(){
        this.app.use(express.json());//middelware del json, para configuracion, estoy me permite recibir cosas desde el body
        this.app.use(morgan('tiny'));
    }

    _routes(){
        this.app.head("/status", (req,res) => {
            res.status(200).end();
        });

        this.app.use(this.basePath, require('../../routes/usersRoutes'));
    }

    _notFound(){
        this.app.use((req,res,next) => {
            const err =new Error("Not Found");
            err.code = 404;
            next(err);
        });
    }

    _errorHandler() {
        this.app.use((err,req,res,next) => {
            const code = err.code || 500;
            res.status(code);
            const body = {
                error:{
                    code,
                    message: err.message
                }
            }
            res.json(body);
        });
    }

    async start() {
        this.app.listen(this.port, (error) => {
            if (error){
                logger.error(err);
                process.exit(1);
                return;
            }
        })
    }

}

module.exports = ExpressServer;
