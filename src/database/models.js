const mongoose = require("mongoose");

const Card = mongoose.model(
  "Card",
  new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    permissions: {
      type: [String],
      default: [],
    },
  })
);

module.exports = { Card };
