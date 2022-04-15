
const mongoose = require('mongoose')

// const { Schema } = mongoose;

const userschema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    mobile: {

        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ", "other"]

    },
    age: Number,
    isIndian: Boolean,
    parentInfo: {

        MotherName: String,
        FatherName: String
    },

    car: [String]

}, { timestamps: true });


module.exports = mongoose.model('user', userschema)