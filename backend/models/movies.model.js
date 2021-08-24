const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    backdrop: {
        type: String,
    },
    cast: {
        type: Array,
    },
    classification: {
        type: String
    },
    director: {
        type: String,
    },
    genres: {
        type: Array,
    },
    id: {
        type: String
    },
    imdb_rating: {
        type: Number
    },
    length: {
        type: String
    },
    overview: {
        type: String
    },
    poster: {
        type: String
    },
    released_on: {
        type: String
    },
    slug: {
        type: String
    },
    title: {
        type: String
    }


});

const MoviesModel = mongoose.model('movies', movieSchema);
module.exports = MoviesModel;