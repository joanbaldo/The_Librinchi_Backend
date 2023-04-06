// CHASIS CONTROLADOR ENDPOINTS
const { User } = require("../models/index.js");
const { Order} = require("../models/index.js");
const { Product } = require("../models/index.js");
const { Token } = require("../models/index.js");
const { Sequelize } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']
const {Op} = Sequelize;

const UserController = {
    create(req, res, next) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password, 10); // Aquí encriptamos el passsword
        User.create({ ...req.body, password: password })
          .then((user) =>
            res.status(201).send({ message: "El usuario ha sido creado con éxito", user })
          )
          .catch((error) => {
            console.error(error);
            next(error);
          });
      },


}


module.exports = UserController;
