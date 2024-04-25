const { Router } = require('express');
const getProducts = require('../handlers/getProducts');
const putProducts = require('../handlers/putProducts');
const getProductsById = require('../handlers/getProductById');
const postProducts = require('../handlers/postProducts');
const deleteProduct= require('../handlers/deleteProduct');

const productsRouter = Router();

productsRouter.get('/', getProducts);

productsRouter.post('/', postProducts);

productsRouter.get('/:id', getProductsById);

productsRouter.put('/:id', putProducts);

productsRouter.delete('/:id', deleteProduct);



module.exports = productsRouter;

