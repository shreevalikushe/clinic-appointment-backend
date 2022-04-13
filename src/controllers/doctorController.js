const express = require("express");
const Doctor = require("../models/doctor.model");
const router = express.Router();

//POST
router.post("/", async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    return res.status(201).send(doctor);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const allDoctors = await Doctor.find();
    return res.status(200).send(allDoctors);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//Get by Id
router.get("/:id", async (req, res) => {
  try {
    const singleDoctor = await Doctor.findById(req.params.id);
    return res.status(200).json(singleDoctor);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});
module.exports = router;
