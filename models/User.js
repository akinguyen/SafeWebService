const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const User = new Schema({
  username: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  },
  alert: [
    {
      time: { type: String },
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
