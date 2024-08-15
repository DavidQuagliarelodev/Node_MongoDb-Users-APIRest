const express = require("express");
const router = express.Router();
const User = require("../Model/User");

router.get("/user", async (req, res) => {
  const user = await User.find();
  res.status("200").send(user);
});

router.get("/user/:name", async (req, res) => {
  const name = req.params.name;
  const user = await User.findOne({ name: name });
  res.status("200").send(user);
});

router.post("/user", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  try {
    const user = await new User({
      name: name,
      age: age,
      email: email,
    });
    await user.save();
    await res.status("201").json({ Created: "Ok" });
  } catch (e) {
    console.error(e);
  }
});

router.put("/user/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  await User.findByIdAndUpdate(id, {
    name: name,
    age: age,
    email: email,
  });
  res.status("200").json({ deleted: "Updated Success" });
});

router.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id });
  res.status("200").json({ deleted: "Deleted Success" });
});

module.exports = router;
