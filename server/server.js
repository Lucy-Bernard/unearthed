import express from "express";
// const express = require("express");
import giftsRouter from "./routes/gifts.js";
const app = express();

// request/respond to files from public directory
app.use("/public", express.static("./public"));
// request/respond to files from public/scripts directory
app.use("/scripts", express.static("./public/scripts"));

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>',
    );
});
app.use("/gifts", giftsRouter);

// port environment variable, check if exists otherwise use 3001 port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
