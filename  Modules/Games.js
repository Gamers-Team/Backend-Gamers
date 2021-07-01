const axios = require("axios");


module.exports = {
  gamesFunc,
  addfeedback,
  getNews,
  changingPlat,
} ;


class Data {
  constructor(item) {
    this.name = item.name;
    this.id=item.id
    this.released = item.released;
    this.background_image = item.background_image;
    this.rating = item.rating;
    this.ratings_count = item.ratings_count;
    this.updated = item.updated;
    this.feedback=[];
    this.flagecart=true;
    this.falgewishlist=true;
    this.username=[];
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


let arrayOfFeedback=[]

function addfeedback(req,res){
  let { username, feedback, id } = req.body;

  arrayOfFeedback.push({
    username:username,
    feedback:feedback,
    id:id,
  })

}




function getNews(req,res){

  console.log('test');

  const url=`https://newsapi.org/v2/everything?domains=gameinformer.com,destructoid.com&q=games%20And%20gaming&sortBy=popularity&apiKey=3c9471ccb160424d9d34f0326977cc88`;
    axios.get(url).then(news=>{

      res.send(news.data.articles)
    })

    .catch((err)=>{
      res.send(err)
        
    })
}


 function changingPlat(req,res){
  
   const plateform=req.query.plateform
  console.log('test',plateform);

  const url = `https://newsapi.org/v2/everything?domains=gameinformer.com,destructoid.com&q=${plateform}&sortBy=popularity&apiKey=3c9471ccb160424d9d34f0326977cc88`;
 
  axios.get(url).then(news=>{

    res.send(news.data.articles)
  })

 }





function gamesFunc(req, res) {
  // https://www.gamerpower.com/api/giveaways?type=game
  // let url = `https://www.gamerpower.com/api/giveaways`;
 
  let key = process.env.KEY;
  let keyword = (req.query.keyword).toLowerCase();
  let searchBy = (req.query.searchBy).toLowerCase();

  // console.log(keyword,searchBy);
  let url = `https://api.rawg.io/api/games?key=${key}&page_size=15&${searchBy}=${keyword}`;

  axios.get(url).then((response) => {
    let result = response.data.results.map((item) => {
      return new Data(item);
    });

    result.map((item)=>{
    arrayOfFeedback.forEach((feed)=>{
      // return( Number(item.id)===Number(feed.id) ? item.feedback.push(feed.feedback) : item.feedback=[]);
      if(Number(item.id)===Number(feed.id)){
        
        item.feedback.push(feed.feedback)
        item.username.push(feed.username)
      }

    })
    })

    res.send(result);
  })
  .catch((err)=>{
    res.send(err);

  })
 
}


