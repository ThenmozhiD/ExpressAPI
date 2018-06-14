var mongoose = require('mongoose');

//Create Schema
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }

});

var Genre = module.exports = mongoose.model('Genre', genreSchema);


//Get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
};

//Add Genres
module.exports.addGenres = function(genre, callback){
    Genre.create(genre,callback)
}

//update Genres
module.exports.updateGenres = function(id,genre, options,callback){
    var query = {_id:id};
    var update ={
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update,options,callback);
}


//Delete Genres
module.exports.deleteGenres = function(id,callback){
    var query = {_id:id};
   
    Genre.remove(query, callback);
}