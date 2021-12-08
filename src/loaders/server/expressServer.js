const express = require('express');
const config = require('../../config');
class ExpressServer {

    constructor() {
        this.app = express();
        this.port = config.port;
        this.basePath = `${config.api.prefix}/users`;
        this._middelware();
        this._routes();
    }


    _middelware(){
        this.app.use(express.json());//middelware del json, para configuracion, estoy me permite recibir cosas desde el body
    }

    _routes(){
        this.app.use(this.basePath, require('../../routes/usersRoutes'));
    }

    async start() {
        this.app.listen(this.port, (error) => {
            if (error){
                console.log(err);
                process.exit(1);
                return;
            }
        })
    }

}

module.exports = ExpressServer;
