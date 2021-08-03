const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     });
//     console.log("MongoDB Conected");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(console.log("MongoDB Connected!"))
  .catch((err) => {
    (err) => console.log(err);
  });

app.listen("3000", () => {
  console.log("Cnnection Established!!");
});
