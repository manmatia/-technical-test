const { Router } = require('express');
const productsRouter = require('./productRoute');

const router = Router();

router.use("/", productsRouter);


module.exports = router;