const { Products} = require("../db");

const productById = async (id) => {
  let product = await Products.findByPk(id);

  return product;
};

module.exports = productById;