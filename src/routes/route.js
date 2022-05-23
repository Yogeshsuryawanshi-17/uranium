const express = require('express');
const { createUser, userLogin } = require('../controllers/userController');
const { createBook, getBook, getBookWithReview, updateBooks, deleteBook } = require('../controllers/bookController');
const { authentication, authorization } = require('../middleware/auth');
const { bookReview, updateReview, deleteReview } = require('../controllers/reviewController')

const router = express.Router();

// ASSIGNMENT/AWS-S3-PROMISE 
const aws = require("aws-sdk");

aws.config.update({
    accessKeyId: "AKIAY3L35MCRUJ6WPO6J",  // id
    secretAccessKey: "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",  // secret password
    region: "ap-south-1"
});

let uploadFile = async (file) => {
    return new Promise(function (resolve, reject) {
        // this function will upload file to aws and return the link
        let s3 = new aws.S3({ apiVersion: '2006-03-01' }); // we will be using the s3 service of aws

        var uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket",  //HERE
            Key: "FnUr224-YogeshSury/" + file.originalname, //HERE 
            Body: file.buffer
        }


        s3.upload(uploadParams, function (err, data) {
            if (err) {
                return reject({ "error": err })
            }
            console.log(data)
            console.log("file uploaded succesfully")
            return resolve(data.Location)
        })

        // let data= await s3.upload( uploadParams)
        // if( data) return data.Location
        // else return "there is an error"

    })
}

router.post("/write-file-aws", async function (req, res) {

    try {
        let files = req.files
        if (files && files.length > 0) {
            //upload to s3 and get the uploaded link
            // res.send the link back to frontend/postman
            let uploadedFileURL = await uploadFile(files[0])
            res.status(201).send({ msg: "file uploaded succesfully", data: uploadedFileURL })
        }
        else {
            res.status(400).send({ msg: "No file found" })
        }

    }
    catch (err) {
        res.status(500).send({ msg: err })
    }

})



//Users API
router.post('/register', createUser);
router.post('/login', userLogin);

//Books API
router.post('/books', authentication, authorization, createBook);
router.get('/books', authentication, getBook);
router.get('/books/:bookId', authentication, getBookWithReview);
router.put('/books/:bookId', authentication, authorization, updateBooks)
router.delete('/books/:bookId', authentication, authorization, deleteBook);

// Review API
router.post('/books/:bookId/review', bookReview)
router.put('/books/:bookId/review/:reviewId', updateReview)
router.delete('/books/:bookId/review/:reviewId', deleteReview)


module.exports = router