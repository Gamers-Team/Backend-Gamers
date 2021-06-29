'use stric'
require('dotenv').config();
const express=require('express');
const app=express();
app.use(express.json());
const mongoose = require('mongoose');
const cors=require('cors');
app.use(cors())
const PORT=process.env.PORT;
const URI=process.env.MONGODB
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
const{
    handleWishList,
    handleAddWishlist,
    handleRemoveWishList,  
    handleCart,
    handleAddCart,
    handleRemoveCart,
}=require('./ Modules/wishlist');

const {
  gamesFunc,
  addfeedback,
} = require("./ Modules/Games");

/// This for Wish List Items 
app.get('/',homeRoute);
app.post('/addTowishList',handleAddWishlist);
app.get('/wishlist',handleWishList);
app.delete('/remove',handleRemoveWishList);

/// This for  Cart Item

app.get('/cart',handleCart);
app.post('/addToCart',handleAddCart)
app.delete('/removecart',handleRemoveCart)

function homeRoute(req,res){
res.send("Welcome to our Backend Sever ")
};


//localhost:3001/games
app.get("/games", gamesFunc);
app.post("/addfeedback", addfeedback);

// app.get("*", (req, res) => {
//   res.status(404).send("sorry, this page not found");
// });

app.listen(PORT, () => {
  console.log(`listening On Port ${PORT}`);
});
