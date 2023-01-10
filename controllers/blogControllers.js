const Blog = require("../models/blog");

// get controllers
const blogsGet = (req, res) => {
  Blog.find()
    .sort({ updatedAt: -1 })
    .then((blogs) => {
      res.render("blogs/index", { title: "Home", blogs });
    });
};

const blogsCreateGet = (req, res) => {
  res.render("blogs/create", { title: "Create A Blog" });
};

const blogDetailsGet = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.render("blogs/details", { title: "Details", blog });
    })
    .catch(() => res.status(404).render("404", { title: "404 not found" }));
};

const blogEditGet = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.render("blogs/edit", { title: "Edit", blog });
    })
    .catch(() => res.status(404).render("404", { title: "404 not found" }));
};
// post controller
const blogsCreatePost = (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then(() => {
    res.redirect("/blogs");
  });
};
// delete controller
const blogDelete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/" });
    })
    .catch((err) => res.status(404).render("404", { title: "404 not found" }));
};

// put controller

const blogPut = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body)
    .then(() => res.json({ redirect: "/" }))
    .catch((err) => console.log(err));
};

module.exports = {
  blogsGet,
  blogsCreateGet,
  blogDetailsGet,
  blogEditGet,
  blogsCreatePost,
  blogDelete,
  blogPut,
};
