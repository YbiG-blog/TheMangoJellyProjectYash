const express  = require("express");
require("./congif/dbconfig")
const register =  require("./router/details");
const filterProducts = require("./router/filter")

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTION,GET,POST,PUT,PATCH,DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  
app.get("/api/user/", async(req,res)=>{
    res.status(200).send("Api is working.....")
})
app.use("/api/user/",register);
app.use("/api/user/",filterProducts);
const port = 8000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`server has been started on port : ${port}`);;
})