'use stric'
require('dotenv').config();
const express=require('express');
const app=express();
const PORT=3001;
const cors=require('cors');
app.use(cors())


app.get('/',homeRoute)
function homeRoute(req,res){
res.send("Welcome to our Backend Sever ")
}




app.listen(PORT,()=>{
    console.log(`listening On Port ${PORT}`);
})

