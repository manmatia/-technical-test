const controllPostProduct= require("../../src/controllers/controllPostProducts");

const postProducts = async(req, res)=>{
    try{
        const newProduct = await controllPostProduct(req);
        res.status(201).json({message: newProduct});
    }catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = postProducts;