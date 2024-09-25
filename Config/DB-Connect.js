const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DataBase Connection Sucessful"))
    .catch((error) => {
      console.log("DataBase Connection Unsucessful");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
