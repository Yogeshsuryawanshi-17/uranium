const { default: mongoose } = require("mongoose");
const { modelName } = require("./userModel");


const Books = new mongoose.Schema({

   BookName : String,
   authorName:String,
   category : {

        type:String,
        enum : [  "Personal development",  "Instructional", "History" ," Fiction ","Biography","literature"],
        required : true

   },
   year : String


}, {timestamps:true})

module.exports = mongoose.model('Books',Books)