const axios = require("axios");

class Data {
  constructor(item) {
    this.name = item.name;
    this.released = item.released;
    this.background_image = item.background_image;
    this.rating = item.rating;
    this.ratings_count = item.ratings_count;
    this.updated = item.updated;
    this.playtime = item.playtime;
    this.short_screenshots = item.short_screenshots.map((short_screenshots) => {
      return short_screenshots.image;
    });
    this.parent_platforms = item.parent_platforms.map((parent_platforms) => {
      return parent_platforms.platform.name;
    });
    this.genres = item.genres.map((genres) => {
      return genres.name;
    });
  }
}

function gamesFunc(req, res) {
  // https://www.gamerpower.com/api/giveaways?type=game
  // let url = `https://www.gamerpower.com/api/giveaways`;
  console.log(req.body)
  let key = process.env.KEY;
  // let parameter = req.query.parameter;
  // let keyWord = req.query.keyWord;
  let url = `https://api.rawg.io/api/games?key=${key}&page_size=40`;

  axios.get(url).then((response) => {
    let result = response.data.results.map((item) => {
      return new Data(item);
    });
    res.send(result);
  });
 
}

module.exports = gamesFunc;
