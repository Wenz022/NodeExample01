const express = require("express");
const router = express.Router();

function testMiddleWare(req, res, next) {
  console.log("첫번째 미들웨어");
  next();
}

function testMiddleWare2(req, res, next) {
  console.log("두번째 미들웨어");
  next();
}

router.get("/", testMiddleWare, testMiddleWare2, (req, res) => {
  res.send("admin app");
});

router.get("/products", (req, res) => {
  // res.send("admin products 이후 url");
  res.render("admin/products.html", {
    message: `<h1>태그 출력</h1>`,
    online: "express",
  });
});

router.get("/products/write", (req, res) => {
  res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
  res.send(req.body);
});

module.exports = router;
