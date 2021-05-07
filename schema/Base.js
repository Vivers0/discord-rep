const { Schema, model } = require("mongoose");

const Base = new Schema({
  userID: { type: String },
  guildID: { type: String },
  rep: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: new Date() }
});

module.exports = model('Base', Base);