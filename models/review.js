const mongoose = require("mongoose");

// Book Schema
const movieSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  moviename: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  overview: {
    type: String
  }
});

const Movie = (module.exports = mongoose.model("book", movieSchema));

// Get Books
module.exports.getReview = (callback, limit) => {
  Movie.find(callback).limit(limit);
};

// Get Book
module.exports.getReviewById = (id, callback) => {
  Movie.findById(id, callback);
};

// Add Book
module.exports.addReview = (review, callback) => {
  Movie.create(review, callback);
};

// Update Book
module.exports.updateReview = (id, review, options, callback) => {
  var query = { _id: id };
  var update = {
    firstname: review.firstname,
    lastname: review.lastname,
    email: review.email,
    moviename: review.moviename,
    rating: review.rating,
    overview: review.overview
  };
  Movie.findOneAndUpdate(query, update, options, callback);
};

// Delete Book
module.exports.removeReview = (id, callback) => {
  var query = { _id: id };
  Movie.remove(query, callback);
};
