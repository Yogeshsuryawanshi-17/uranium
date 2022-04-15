const BookModel = require("../models/Bookmodel.js")


const createBook = async function(req,res){

  let getBookData = req.body
  let SaveBookDat = await BookModel.create(getBookData)
  res.send(SaveBookDat)

}

module.exports.createBook = createBook


const FindBook = async function(req,res){

   /// let getBookData = req.body
    let SaveBookDat = await BookModel.find()
    res.send(SaveBookDat)
  
  }
  
  module.exports.FindBook= FindBook
  