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
     //ENDPOINT: ACTUALIZAR PRODUCTO POR ID
     updateProduct(req, res) {
        Product.update(
          { ...req.body },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then(() =>
            Product.findByPk(req.params.id).then((product) =>
              res.send({ msg: "Se ha actualizado el producto con exito", product })
            )
          )
          .catch((error) => console.error(error));
        },
    //ENDPOINT: VER PRODUCTO POR ID
    getById(req, res) {
        Product.findByPk(req.params.id)
            .then(() =>
                Product.findByPk(req.params.id).then((product) =>
                    res.send({ msg: "Categoria seleccionada por id ,mostrada con éxito", product })
                )
            )
            .catch((error) => console.error(error));
    },
}

module.exports = ProductController