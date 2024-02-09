const express = require('express');
const routerUser = require('./user.router');
const routerToDo = require('./toDo.router');
const verifyJWT = require('../utils/verifyJWT');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
//http://localhost:8080/users

router.use('/todos', verifyJWT, routerToDo)


module.exports = router;