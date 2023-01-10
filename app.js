const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/blogRoutes");
// initiallize app with express()
const app = express();

// connect and get db from mongodb using mongoose
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/express_ejs_blog_tut")

  .then(() => {
    app.listen(3000);
    console.log("connected to db");
  })
  .catch((err) => console.log(err));
// set view engine to ejs
app.set("view engine", "ejs");

// setup middleware to serve static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// render views (root is automatically ./views)
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
// blog routes
app.use(router);
// 404 route
app.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
});
