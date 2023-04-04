const { Category } = require('../models/index.js');


const CategoryController = {

    create(req,res) {
         Category.create(req.body)
            .then(post => res.status(201).send({ message: 'Categoria creada con éxito', post }))
            .catch(console.error)
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
