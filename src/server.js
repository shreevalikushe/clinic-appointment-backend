const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const doctorController = require("./controllers/doctorController");
const bookingController = require("./controllers/bookingController");

const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_DB_URL);
};

app.use("/doctors", doctorController);
app.use("/bookings", bookingController);

app.listen(process.env.PORT, async (req, res) => {
  await connect();
  console.log(`Listening on port ${process.env.PORT}`);
});
