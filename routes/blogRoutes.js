const express = require("express");
const router = express.Router();
const {
  blogsGet,
  blogsCreateGet,
  blogDetailsGet,
  blogEditGet,
  blogsCreatePost,
  blogDelete,
  blogPut,
} = require("../controllers/blogControllers");
// blog routes
// // get requests
router.get("/blogs", blogsGet);

router.get("/blogs/create", blogsCreateGet);

router.get("/blogs/:id", blogDetailsGet);

router.get("/blogs/edit/:id", blogEditGet);

// post/delete/put requests

router.post("/blogs", blogsCreatePost);

router.delete("/blogs/:id", blogDelete);

router.put("/blogs/:id", blogPut);

module.exports = router;
