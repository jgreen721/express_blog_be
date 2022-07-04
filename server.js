require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 4455;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("mongoose connected");
});

if (process.env.NODE_ENV === "production") {
  console.log("----    production code RUNNING 😎 -----");
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build"));
  });
}

console.log("MongoURI", process.env.MONGO_URI);
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ status: 200, msg: "connected to your back-end api" });
});

app.use(routes);

app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
