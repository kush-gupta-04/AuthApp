const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const dbConnect = require("./config/database");
dbConnect();

const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`App is listing at ${PORT} `);
});

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> THis is HOMEPAGE baby </h1>`);
});
