const { Category } = require('../models/index.js');


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
