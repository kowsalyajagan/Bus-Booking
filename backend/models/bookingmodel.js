const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    tripId: { type: String, required: true },
    name: { type: String, required: true },
    seatsBooked: { type: Number, required: true },
    totalAmount: { type: Number, required: true }
});

module.exports = mongoose.model("Booking", bookingSchema);
