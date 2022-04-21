const req = require("express/lib/request")
const ProductModel= require("../models/OrderModel")



const placeOrder = async function(req,res){

    let Order = req.body
    const savedData = await ProductModel.create(Order)
    res.send({msg:savedData});
}

module.exports.placeOrder = placeOrder