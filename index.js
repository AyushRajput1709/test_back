const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config()
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
    res.send("<h1>Ayush Rajput twitter account</h1>")
})
app.get("/pfp",(req,res)=>{
    res.send("Ayush Rajput PFP")
})
app.get("/bio",(req,res)=>{
    res.send("<h1>Cricket Enthusiast </h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});