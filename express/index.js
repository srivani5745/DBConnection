const express=require('express')
const app=express();

app.get("/get",(req,res)=>{
res.send("Welcome to get method");
})
app.get("/get/user",(req,res)=>{
    res.send("Welcome to get/user method")
})

app.listen(7766,()=>{
    console.log("My Server is running on 7766 PORT number");
})