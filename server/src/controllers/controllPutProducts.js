const { Products} = require("../db");

const controllPutProducts = async(req)=>{
    const { name, price, isFree, stock , creationTime } = req.body;
    const { id } = req.params;

    await Products.update(
        { name, price, isFree, stock, creationTime },
        { where: { id }}
    );




    return "Product updated successfully";
};

module.exports = controllPutProducts;