const { Category } = require('../models/index.js');
const { Sequelize } = require("../models/index.js");
const { Op } = Sequelize


const CategoryController = {

    //ENDPOINT: CREAR CATEGORÍA
    create(req, res) {
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Categoria creada con éxito', category }))
            .catch(console.error)
    },

    //ENDPOINT: VER TODAS LAS CATEGORÍAS
    getAll(req, res) {
        Category.findAll()
            .then((category) => res.send({ msg: "Lista de categorias mostradas con éxito", category }))
            .catch((error) => console.error(error));
    },

    //ENDPOINT: VER CATEGORÍA POR ID
    getById(req, res) {
        Category.findByPk(req.params.id)
            .then(() =>
                Category.findByPk(req.params.id).then((category) =>
                    res.send({ msg: "Categoria seleccionada por id ,mostrada con éxito", category })
                )
            )
            .catch((error) => console.error(error));
    },
    //ENDPOINT: ACTUALIZAR CATEGORÍA POR ID

    updateCategory(req, res) {
        Category.update(
            { ...req.body },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
            .then(() =>
                Category.findByPk(req.params.id).then((category) =>
                    res.send({ msg: "Se ha actualizado la categoria con exito", category })
                )
            )
            .catch((error) => console.error(error));
    },

    //ENDPOINT: ELIMINAR CATEGORÍA POR ID

    deleteCategory(req, res) {
        Category.destroy({
            where: {
                id: req.params.id,
            },
        })
            .then(() =>
                Category.findByPk(req.params.id).then((category) =>
                    res.send({ msg: "La categoria ha sido eliminada con exito", category })
                )
            )
            .catch((error) => console.error(error));
    },
    //ENDPOINT: FILTRAR CATEGORÍA POR NOMBRE
    getOneByName(req, res) {
        Category.findOne({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`,
                },
            },
        })
            .then((category) => res.send(category))
            .catch((error) => console.error(error));
    },

    // Category.findAll({include:...})
    //ENDPOINT: VER CATEGORÍAS JUNTO CON PRODUCTOS

    showCatProds (req,res){
        Category.findAll({
            include: [{model Product}],
        })
            .then((categories)=>
                res.send({ msg:"Categorias mostradas con sus productos", categories})
                )
                .catch((error) => console.error(error));
    }


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


module.exports = CategoryController












// const { Category } = require('../models/index.js');

// const CategoryController = {

//     // ENDPOINT: CREAR CATEGORÍA
//     create(req, res) {
//         Category.create(req.body)
//             // .then(category => res.status(201).send({ message: 'Categoria creada con éxito', category }))
//             .then(category => res.status(201).send(`La categoria -- ${category} -- ha sido creada con éxito`))
//             .catch((error) => console.error(error));
//     },

// }

// module.exports = CategoryController
