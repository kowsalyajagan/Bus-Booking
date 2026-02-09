const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  from: String,
  to: String,
  date: String,
  price: Number,
  seats: Number,
  availableSeats: Number
});

module.exports = mongoose.model("Trip", tripSchema);
