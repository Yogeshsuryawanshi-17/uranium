const req = require("express/lib/request")
const ProductModel= require("../models/Productmodel")



const assignProdcut = async function(req,res){

    let product = req.body
    const savedData = await ProductModel.create(product)
    res.send({msg:savedData});
}

module.exports.assignProdcut =assignProdcut