const {Products} = require("../db")

const controllPostProduct = async (req) => {

  const { name, isFree, stock, creationTime, price } = req.body;
  
  
  if (!name) {
      throw new Error("Product name cannot be null");
  }

  await Products.create({ name, isFree, stock, creationTime, price });

  return "Product added successfully";
};

module.exports = controllPostProduct;
