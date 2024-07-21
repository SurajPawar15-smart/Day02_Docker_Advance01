const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send({ data: ["saurabh", "abhishek", "TCSG"] });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
