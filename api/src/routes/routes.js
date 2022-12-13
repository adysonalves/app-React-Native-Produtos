const express = require('express');
const router = express.Router();
const autenticarUser = require('../controllers/autenticacao-controller');
const addUsers = require('../controllers/add-user-controller');
const listarProdutos = require('../controllers/list-produtos-controller');
const addProduto = require('../controllers/add-produtos-controller');
const editarProduto = require('../controllers/editar-produtos-controller');
const deleteProduto = require('../controllers/delete-produto-controller');
const controleAcesso = require('../controllers/controller-acesso');

router.post('/login', autenticarUser);

router.post('/add-user', addUsers);

router.get('/produtos', controleAcesso, listarProdutos);

router.post('/add-produto', controleAcesso, addProduto);

router.put('/editar-produto/:id', controleAcesso, editarProduto );

router.delete('/delete-produto/:id', controleAcesso, deleteProduto );

module.exports = router;