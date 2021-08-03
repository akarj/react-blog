const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const authRoute = require("./routes/Auth");
// const usersRoute = require("./routes/Users");
const postsRoute = require("./routes/Posts");

dotenv.config();

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

// app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.listen("3000", () => {
  console.log("Cnnection Established!!");
});
