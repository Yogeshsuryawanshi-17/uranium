const req = require("express/lib/request")
const ProductModel= require("../models/OrderModel")
const userModel = require("../models/userModel")



const placeOrder = async function(req,res){

    if(!req.body.user_id|| !req.body.product_id)
        return res.send("UserId and ProductId are required Fields")

        const isProductValid = await ProductModel.findById({_id:req.body.product_id})
        const isUserValid = await userModel.findById({_id:req.body.user_id})

        if (!isUserValid || !isProductValid) 
        return res.send("entered UserId or ProductId or both are not valid")
        
          
        if(req.isFreeAppUser=="true")
        {
            const order = {
                userId :req.body.user_id,
                productId:req.body.product_id,
                amount:0,
                isFreeAppUser:true,
                date: getCurrentDate()
            }

            const savedData = await orderModel.create(order)
            return res.send({msg : savedData})
        }
        // else {
        //     const amount = isProductValid.price;
        //     let  balance = isUserValid.balance;
        //       if(balance<amount){
        //       return res.send("Insufficient Balance")
        // }
        //       balance = balance-amount;
        //       const updateBalance = await userModel.updateOne({_id:isUserValid["_id"]},{$set:{balance:balance}})
        //       order = {
        //           user_id :req.body.user_id,
        //           product_id:req.body.product_id,
        //           amount:amount,
        //           isFreeAppUser:false,
        //           date: getCurrentDate()
        //       }
        //       const savedData = await orderModel.create(order)
        //       return res.send({msg : savedData})
        //   }

}
const getAllOrders = async (req,res) => {
    const getData = await orderModel.find()
   return res.send({msg:getData})
}


module.exports.placeOrder = placeOrder
module.exports.getAllOrders = getAllOrders