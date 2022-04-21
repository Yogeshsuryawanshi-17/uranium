const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    // Write the schema content
    name: String,
	balance:{type:Number,default:100},// Default balance at user registration is 100
	address:String,
	age: Number,
 	gender:{
         type:String,
         enum : ["female","male","other",]
     },
	isFreeAppUser: {type:Boolean,default:false}

}, { timestamps: true });

module.exports = mongoose.model('MiddlwareUser', userSchema) //users
