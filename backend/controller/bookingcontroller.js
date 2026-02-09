const Booking = require("../models/bookingmodel");
const Trip = require("../models/tripmodel");

exports.bookTrip = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        await Trip.findByIdAndUpdate(req.body.tripId, {
            $inc: { availableSeats: -req.body.seatsBooked }
        });

        res.status(201).json({ message: "Booking Successful", booking });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.id });
        const result = [];
        for (let b of bookings) {
            const trip = await Trip.findById(b.tripId);
            result.push({
                _id: b._id,
                name: b.name,
                seatsBooked: b.seatsBooked,
                totalAmount: b.totalAmount,
                trip
            });
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: "Booking Cancelled" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
