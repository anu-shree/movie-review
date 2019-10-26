const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

Movie = require("./models/review");

// Connect to Mongoose
mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("home sweet home");
});

app.get("/review", (req, res) => {
  Movie.getReview((err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.get("/review/:_id", (req, res) => {
  Movie.getReviewById(req.params._id, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.post("/review", (req, res) => {
  var review = req.body;
  Movie.addReview(review, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.put("/review/:_id", (req, res) => {
  var id = req.params._id;
  var review = req.body;
  Movie.updateReview(id, review, {}, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.delete("/review/:_id", (req, res) => {
  var id = req.params._id;
  Movie.removeReview(id, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.listen(3009);
console.log("Running on port 3000...");
