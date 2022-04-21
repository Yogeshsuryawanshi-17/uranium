
const mongoose = require('mongoose');
///const { modelName } = require('./userModel');
  
const ProductSchema = new mongoose.Schema({

    name:String,
	category:{

        type:String,
        enum :["book","Stationary","electronic"]
    },
	price:Number
}, { timestamps: true });

module.exports = mongoose.model("productmiddleware",ProductSchema)