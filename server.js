"use stric";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());

const gamesFunc = require("./ Modules/Games");

const PORT = process.env.PORT;


server.get("/", homeRoute);
function homeRoute(req, res) {
  res.send("Welcome to our Backend Sever ");
}


//localhost:3001/games
server.get("/games", gamesFunc);

server.get("*", (req, res) => {
  res.status(404).send("sorry, this page not found");
});

server.listen(PORT, () => {
  console.log(`listening On Port ${PORT}`);
});
