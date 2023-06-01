import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const promt = req.body.promt;
  const size = req.body.size;
  const number = req.body.number;

  console.log(promt, size, number);

  res.render("index");
});

app.listen(3000, () => console.log("server started..."));
