const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    speciality: { type: String, required: true },
    availability: [{ type: String, required: true }],
    cost: [{ type: Number, required: true }],
  },
  { versionKey: false, timestamps: true }
);

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;
