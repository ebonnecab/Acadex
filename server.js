//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

//Middleware
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");
app.use(express.static("public"));

//GET routes
app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/parentzone", (req, res) => {
  res.render("Parents");
});

app.get("/kidzone", (req, res) => {
  res.render("Kids");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
