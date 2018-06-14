var mongoose = require('mongoose');

//Create Schema
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
        
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    },

});

var Book = module.exports = mongoose.model('Book', bookSchema);


//Get books

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
};


module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
};


module.exports.addBooks = function(book, callback){
    Book.create(book,callback)
}


//update Genres
module.exports.updateBooks = function(id,book, options,callback){
    var query = {_id:id};
    var update ={
        title: book.title,
        genres: book.genres,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        image_url: book.image_url,
        buy_url: book.buy_url

    }
    Book.findOneAndUpdate(query, update,options,callback);
}


//Delete Genres
module.exports.deleteBooks = function(id,callback){
    var query = {_id:id};
   
    Book.remove(query, callback);
}