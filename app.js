const express  = require("express");


const app = express();

app.use(express.json());

app.get("/api/user/", async(req,res)=>{
    res.status(200).send("Api is working.....")
})
const port = 8000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`server has been started on port : ${port}`);;
})