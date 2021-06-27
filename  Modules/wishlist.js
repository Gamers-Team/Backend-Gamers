module.exports={
    handleWishList,
}
const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    name: String,
    released: String,
    background_image: String,
    ratings_count: String,
    updated: String,
    playtime: String,
    short_screenshots: Array,
    parent_platforms: Array,
    genres: Array,

  });
  
  //create a schema
  const userSchema = new mongoose.Schema({
    email: String,
    game: [wishSchema],
  });
  const myUserModel = mongoose.model("game", userSchema);


  function seedEmailCollection() {
    const user1 = new myUserModel({
      email: "konay59631@seatto.com",
      game: [
       
        {
          name: "Grand Theft Auto V",
          released: "2013-09-17",
          background_image: "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
          rating: 4.48,
          ratings_count: 4840,
          updated: "2021-03-03T20:31:29",
          playtime: 70,
          short_screenshots: [
          "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
          "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
          "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
          "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
          "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
          "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
          "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
          ],
          parent_platforms: [
          "PC",
          "PlayStation",
          "Xbox"
          ],
          genres: [
          "Action",
          "Adventure"
          ]
          },
      ],
    });
  
    user1.save();
  }
  
  // seedEmailCollection();



function handleWishList(req,res){
    let email=req.query.email

    myUserModel.find({ email: email }, function (err, userData) {
        if (err) {
          res.send(err);
        } else {
          res.send(userData[0].game);
        }
      });
}