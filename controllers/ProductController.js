const { Product , Category} = require('../models/index.js');
// const { Category } = require('../models/index.js'); //Sino lo comento el servidor no inicia
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
    //ENDPOINT: ELIMINAR PRODUCTO POR ID

    deleteProduct (req, res) {
        Product.destroy({
            where: {
                id: req.params.id,
            },
        })
            .then(() =>
                Product.findByPk(req.params.id).then((product) =>
                    res.send({ msg: "El producto ha sido eliminado con exito", product })
                )
            )
            .catch((error) => console.error(error));
    },
    //ENDPOINT: FILTRAR PRODUCTO POR NOMBRE
    getOneByName(req, res) {
        Product.findOne({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`,
                },
            },
        })
            .then((product) => res.send(product))
            .catch((error) => console.error(error));
    },
    // ENDPOINT: FILTRAR PRODUCTO POR PRECIO
    getOneByPrice(req, res) {
        Product.findAll({
          where: { price: req.params.price },
        })
          .then((product) => res.send(product))
          .catch((error) => console.error(error));
      },  
    // ENDPOINT: ORDENAR PRODUCTOS POR PRECIO DESCENDENTEMENTE
    getProdsByPriceDesc(req, res) {
        Product.findAll({
          order: [["price", "DESC"]],
        })
          .then((product) => res.send(product))
          .catch((error) => console.error(error));
      },
    // ENDPOINT: MOSTRAR PRODUCTOS CON SUS CATEGORIAS
      getAll(req, res) {
        Product.findAll({
          include: [{ model: Category }],
        })
          .then((products) =>
            res.send({ msg: "Productos mostrados con su categoria", products })
          )
          .catch((error) => console.error(error));
      },
}

module.exports = ProductController