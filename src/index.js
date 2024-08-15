const express = require("express");
const app = express();
const port = 8080;
const userController = require("./User/Controller/userController")
const bodyParser = require("body-parser");
const connect = require("./db/connect")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status("200").json({ Servidor: "Open" });
});

app.use("/", userController)

app.listen(port, async (e) => {
  try {
    console.log("open servidor");
  } catch {
    console.log(e);
  }
});
