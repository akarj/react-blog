const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/Auth");
const usersRoute = require("./routes/Users");
const postsRoute = require("./routes/Posts");
const categoryRoute = require("./routes/Categories");
const multer = require("multer");

app.use(express.json());
const PORT = process.env.PORT;
const DATABASE_URL = process.env.MONGO_URL;

mongoose
  .connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("MongoDB Connected!"))
  .catch((err) => {
    (err) => console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been upload");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);
// app.use("/", (req, res) => {
//   console.log("Home PAge for Server js line 44");
//   res.status(200).json({ message: "Worked" });
// });
app.get("/api", (req, res) => {
  console.log("Home PAge for Server js line 44");
  res.status(200).json({ message: "api Worked" });
});
app.listen(PORT, () => {
  console.log(`MONGO URL is ${DATABASE_URL}`);
  console.log(`Server is running on port ${PORT}`);
});
