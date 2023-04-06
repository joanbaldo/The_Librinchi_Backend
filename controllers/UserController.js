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

    // ENDPOINT: CREAR USUARIO
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
    // ENDPOINT: LOGIN USUARIO
    login(req, res) {
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then((user) => {
          if (!user) {
            return res
              .status(400)
              .send({ message: "El usuario o la contraseña son incorrectos" });
          }
    
          const isMatch = bcrypt.compareSync(req.body.password, user.password);
    
          if (!isMatch) {
            return res
              .status(400)
              .send({ message: "El usuario o la contraseña son incorrectos" });
          }
    
        const token = jwt.sign({ id: user.id }, jwt_secret);
        Token.create({ token, UserId: user.id });
        res.send({ token, message: 'Bienvenid@ ' + user.name, user });
        });
      },
}


module.exports = UserController;
