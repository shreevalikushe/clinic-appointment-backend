const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctor" },
    time: { type: String, required: true },
    date: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
