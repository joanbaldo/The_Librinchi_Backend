const { Product} = require('../models/index.js');
const { Category } = require('../models/index.js');
const { Sequelize } = require("../models/index.js");
const { Op } = Sequelize


const ProductController = {

    //ENDPOINT: CREAR PRODUCTO
    create(req, res) {
        Product.create(req.body)
            .then(product => res.status(201).send({ message: 'Producto creado con éxito', product }))
            .catch(console.error)
    },


}

module.exports = ProductController