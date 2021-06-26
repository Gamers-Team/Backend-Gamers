'use stric'
require('dotenv').config();
const express=require('express');
const app=express();
app.use(express.json());
const mongoose = require('mongoose');
const cors=require('cors');
app.use(cors())
const PORT=3001;
const URI=process.env.MONGODB
mongoose.connect("mongodb://localhost:27017/game", {useNewUrlParser: true, useUnifiedTopology: true});
const{
    handleWishList,
    
}=require('./ Modules/wishlist')




app.get('/',homeRoute)
app.get('/wishlist',handleWishList)

function homeRoute(req,res){
res.send("Welcome to our Backend Sever ")
}




app.listen(PORT,()=>{
    console.log(`listening On Port ${PORT}`);
})

