const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    
    Publisher_Name: String,
    Headquarter: String

}, { timestamps: true });

module.exports = mongoose.model('Publisher', publisherSchema)
