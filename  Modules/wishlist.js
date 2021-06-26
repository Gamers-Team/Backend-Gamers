module.exports={
    handleWishList,
}
const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String,
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
          name: "Living in the Light: A guide to personal transformation",
          description:
            "Living in the Light: A Guide to Personal and Planetary Transformation is just that, but so much more. This is self-help for those who have real There comes a time for many when their self-help journey inevitably takes on a spiritual connotation given the extent to how deep their attempts to become the best version of themself go.",
          status:
            "recommendedtoMe",
        },
        {
          name: "The Choice: Embrace the Possible",
          description:
            "Its 1944 and sixteen-year-old ballerina and gymnast Edith Eger is sent to Auschwitz. Separated from her parents on arrival, she endures unimaginable experiences, including being made to dance for the infamous Josef Mengele. When the camp is finally liberated, she is pulled from a pile of bodies, barely alive.",
          status:
            "lifeChanging",
        },
      ],
    });
  
    user1.save();
  }
  
//   seedEmailCollection();



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