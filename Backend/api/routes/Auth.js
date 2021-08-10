const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//checking
router.get("/", (req, res) => {
  try {
    console.log("Auth page for Auth js line 8 /");

    console.log("normal worked");
    res.status(200).json({ message: "normal worked" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//checking
router.get("/register", (req, res) => {
  try {
    console.log("Auth page for Auth js line 21 register");
    const user = new User({
      username: "GOJO SATORU",
      email: "something@gmail.com",
      password: "123456",
    });
    user.save();
    console.log("register worked");
    //  res.status(200).json({ user });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Register
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
