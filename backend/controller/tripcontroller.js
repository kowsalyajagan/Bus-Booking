const Trip = require("../models/tripmodel");

exports.createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json({ message: "Trip Created", trip });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
