const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    book_name:String,
    category:String,
    book_price:Number,
    book_author:String,
    update_at:{type:Date, default: Date.now }
})
module.exports = mongoose.model('Book',BookSchema);