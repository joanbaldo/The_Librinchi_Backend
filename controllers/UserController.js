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



}


module.exports = UserController;
