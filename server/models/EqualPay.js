const mongoose = require("mongoose");

const equalPaySchema = new mongoose.Schema({
  employeeDiversity: {
    totalEmployees: {
      type: Number,
      required: true,
    },
    maleEmployees: {
      type: Number,
      required: true,
    },
    femaleEmployees: {
      type: Number,
      required: true,
    },
  },
  genderDiversityRatio: {
    malePercentage: {
      type: Number,
      required: true,
    },
    femalePercentage: {
      type: Number,
      required: true,
    },
  },
}, { timestamps: true });

const EqualPay = mongoose.model("EqualPay", equalPaySchema);
module.exports = EqualPay;
