const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {


    if(req.body.author_id== null || req.body.publisher_id == null)
    return res.send("authorId and publisherId are required ")
    else
    {
        if(req.body.author_id)
        {
           const isAuthor = await authorModel.findOne({_id:req.body.author_id})
           if(!isAuthor)
           return res.send("Entered authorId is not valid")
        }
        if(req.body.publisher_id)
        {
           const isPublisher= await publisherModel.findOne({_id:req.body.publisher_id})
           if(!isPublisher)
           return res.send("Entered publisherId is not valid")
        }
    }

    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})
}

const updateBooks = async (req,res)=>{
    let publishers = await publisherModel.find({name:{$in:['Penguin','HarperCollins' ] }}).select({'_id':1})
    let authors =  await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
        if(publishers.length!==0)
            {
                publishers = publishers.map(inp=>inp._id)
                const update =await bookModel.updateMany({publisher: {$in : publishers}},{$set : {isHardCover:true}})
            }
        if( authors.length!=0)
        {
            authors = authors.map(inp=>inp._id)
            // const update2 =await bookModel.updateMany({author: {$in : authors}},{$set : { price : 10 }})
            const update2 =  (await bookModel.find({author: {$in : authors}})).forEach(async element=>{
                const price = element.price;
                await bookModel.updateOne({_id:element._id},{$set:{price:price+10}})
            })
        }
        res.send("job done")

}






module.exports.createBook = createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBooks = updateBooks