const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  alert: [
    {
      count: { type: Number },
      day: { type: String }
    }
  ],
  song: [
    {
      title: { type: String }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = moongoose.model("User", User);
