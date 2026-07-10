const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() => {
      console.log("Database Connection successful");
    })
    .catch((error) => {
      console.log("Error in database connection ");
      console.error(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
