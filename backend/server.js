const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/trips", require("./routes/trips"));
app.use("/api/bookings", require("./routes/booking"));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
