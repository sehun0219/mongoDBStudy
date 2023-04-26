//@ts-check

const express = require("express");
const app = express();

//라우팅
app.use("/", (req, res) => {
  res.send("hello, world!");
});

//라우팅 + get,post 메소드
app.get("/", (req, res) => {
  res.send("GET");
});

app.post("/", (req, res) => {
  res.send("POST");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The Express server is listening at PORT: ${PORT}`);
});
