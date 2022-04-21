
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema({
  
    user_id:{
        type:ObjectId,
        ref:"MiddlwareUser"

    },
    product_id:{
        type:ObjectId,
        ref:"productmiddleware"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:String

}, { timestamps: true });

module.exports = mongoose.model("Ordermiddleware",OrderSchema)