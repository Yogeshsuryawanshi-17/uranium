const req = require("express/lib/request")
const ProductModel= require("../models/Productmodel")



const assignProdcut = async function(req,res){

    let product = req.body
    const savedData = await ProductModel.create(product)
    res.send({msg:savedData});
}


const getProducts = async (req,res) => {
    const getData =  await ProductModel.find().select({name:1,price:1})
   return  res.send({msg : getData})
}

module.exports.getProducts = getProducts
module.exports.assignProdcut =assignProdcut