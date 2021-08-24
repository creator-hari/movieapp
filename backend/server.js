require('dotenv').config();
const express = require('express')
const connectDB = require('./config/db');
const MoviesModel = require('./models/movies.model')
// const axios = require('axios');
const cors = require('cors')


connectDB();
const app = express();

app.use(cors());

app.get('/api/movies', async (req, res) => {

    const movies = await MoviesModel.find({});
    let moviesData = {};

    movies.forEach(m => {
        m.genres.forEach((g, i) => {
            if (moviesData[g] === undefined) {
                moviesData[g] = {
                    category: g,
                    movies: []
                }
            }
            let obj = {
                director: m.director,
                imdb_rating: m.imdb_rating,
                length: m.length,
                poster: m.poster,
                title: m.title
            }
            if (g === moviesData[g]["category"]) {
                moviesData[g]["movies"].push(obj);
            }
            obj = {}
        });
    });
    res.send({
        status: "Success",
        data: Object.values(moviesData)
    })
});

const PORT = process.env.port || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));