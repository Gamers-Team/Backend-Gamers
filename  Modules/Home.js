require('dotenv').config()
const axios = require('axios')

function mainPageRoute(req,res){

    let GamesHomeDataUrl = `https://www.gamerpower.com/api/giveaways`
axios 
.get(GamesHomeDataUrl)
.then((result)=>{
const gamesArr = result.data.map((item)=>{
    return new Games (item)
})
res.send(gamesArr)
})
.catch((err)=>{
    res.status(500).send(`not found ${err}`)
})


}

class Games {
    constructor(item){
        this.title = item.title
        this.thumbnail = item.thumbnail
        this.users = item.users
        this.image = item.image

    }
}
module.exports= mainPageRoute
