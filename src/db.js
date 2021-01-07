const mongoose = require("mongoose");

const app = require("./app");

function startDB() {
  mongoose.set("useCreateIndex", true);
  mongoose.connect(app.get("dbUrl"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("db connection opened");
  });
}

module.exports = startDB;