const express = require("express");
const Booking = require("../models/booking.model");
const router = express.Router();

//Get all Bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate(
      "doctor",
      "name speciality cost"
    );
    return res.status(200).send(bookings);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
});

//Create Bookings
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    return res.status(200).send(booking);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
