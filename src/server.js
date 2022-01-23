const express = require("express");
const app = express();
//const router = require("./route");
//const cors = require("cors");
//import splistController from "../controller/splistcontroller";
const splistController = require("../controller/splistcontroller")

class InMemoryFriends {
  constructor() {
    this.list = [];
  }

  add(name) {
    this.list.push(name);
  }

  getAll() {
    return this.list;
  }
}
const friendsList = new InMemoryFriends();
const handleError = (err, res) => {
  const { success, data } = err;
  console.log(err);

  let errorMsg = "";
  if (data === undefined && err !== undefined) errorMsg = err.message;
  else if (data.message === undefined) errorMsg = data.data;
  else errorMsg = data.message;
  res.send({ success: success, data: errorMsg });
};

const bodyParser = require("body-parser");

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", "views");
//app.use(cors());
app.use(express.json({ limit: "100mb" }));
//app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.get("/", (req, res) => {
  res.send("Hello app");
});
app.get("/item", (req, res) => {
  res.render("index", { personList: friendsList.getAll() });
});
app.get("/getAllTestListItems", function (req, res) {
  splistController.getAllTestListItems(req.body, (results) => {
    //console.log(res.json({ results: results }));
    res.json({ results: results });
  });
});

app.post("/submit", (req, res) => {
  console.log(req.body.friendName);
  res.render("person-added", {
    personName: req.body.friendName,
    personList: friendsList.getAll(),
  });
});

module.exports = app;
