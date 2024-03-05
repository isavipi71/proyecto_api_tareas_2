const express = require("express");
const cors = require("cors");
const swaggerUI= require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerSpec = require("./swagger");


//CONFIGURACION
const port = 3500;
const api = express();

//MIDDLEWEAR
api.use(cors());
api.use(express.json());
//ruta para mostrar la documentacion de swagger
api.use('./api/doc', 
swaggerUI.serve,
swaggerUI.setup(swaggerJSDoc(swaggerSpec)));

//***************** importar rutas ************************ */
api.use('./api/v1', require('./routes.js'));


//ARRANCAR EL SERVIDOR
api.listen(port, () => {
    console.log("Servidor conectado en puerto 3500");
});
