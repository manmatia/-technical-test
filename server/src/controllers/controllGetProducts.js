const { Products } = require('../db');
const { Op } = require("sequelize");

const controllGetProducts = async(req)=>{
    const allProducts = await Products.findAll();

    const { name }  = req.query;
    if (name) {
        const capitalizeString = (str) => {
          let string = str.toString();
          return str
            .split(" ")
            .map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");
        };
        const productWanted = capitalizeString(name).trim();
    
        const productByName = await Products.findAll({
          where: {
            name: {
              [Op.iLike]: `%${productWanted}%`,
            },
          },
        })
    
    return productByName
    }
    return allProducts;
};

module.exports = controllGetProducts;