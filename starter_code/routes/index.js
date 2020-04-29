const express = require('express');
const router  = express.Router();

const Movie = require('./../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies list */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then( movies => {
    console.log('movies', movies)
    res.render('movies', { movies })
  })
  .catch( (err) => console.log(err));
});

/* GET movie details */
router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
  .then( movieDetails => {
    console.log('movie details', movieDetails)
    res.render('movie', { movieDetails })
  })
  .catch( (err) => console.log(err));
});


module.exports = router;
