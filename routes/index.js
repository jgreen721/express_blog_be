const router = require("express").Router();
const db = require("../models");
let data = require("../data.json");

router.get("/blogs", async (req, res) => {
  let blogs = await db.Blog.find();
  res.json({ status: 200, blogs });
});

router.post("/addblog", async (req, res) => {
  console.log("new Blog!~");
  await db.Blog.create(req.body);
  res.json({ status: 200, msg: "new blog added" });
});

router.get("/delete/:id", async (req, res) => {
  console.log("ID", req.params.id);
  await db.Blog.findByIdAndDelete({ _id: req.params.id }).sort({ date: -1 });
  res.json({ status: 200, msg: "blog deleted" });
});

router.get("/populate", (req, res) => {
  data = data.map((d) => ({ ...d, likes: [], dislikes: [] }));
  console.log(data);
  // data.forEach((d) => {
  //   let blog = new db.Blog(d);
  //   blog.save();
  // });
  res.json({ status: 200, data });
});
module.exports = router;
