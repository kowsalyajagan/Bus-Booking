const User = require("../models/usermodel");

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User Registered", user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: "User Not Found" });
        if (user.password !== req.body.password)
            return res.status(400).json({ message: "Wrong Password" });
        res.json({ message: "Login Success", user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
