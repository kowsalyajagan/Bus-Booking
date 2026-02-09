const router = require("express").Router();
const { bookTrip, getMyBookings, deleteBooking } = require("../controller/bookingcontroller");

router.post("/", bookTrip);
router.get("/:id", getMyBookings);
router.delete("/:id", deleteBooking);

module.exports = router;
