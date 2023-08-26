import express from "express";

const app = express();
const port = 5005;

app.get("/test", (req,res)=> res.send("ok"));

app.listen(port, ()=> console.log(`Server running on port ${port}`));
