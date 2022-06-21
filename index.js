const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const { ZingMp3 } = require("zingmp3-api-full");

// Page Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// ZingMp3Router
const ZingMp3Router = require("./routers/api/ZingRouter");
app.use("/api", cors(), ZingMp3Router);

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

ZingMp3.getVideo("ZWEW9WI8").then((data) => {
  console.log(data);
});
app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
