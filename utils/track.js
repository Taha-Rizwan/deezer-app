const request = require('request')

const Track = (Search, callback) => {
  const url = "https://api.deezer.com/search?q=" + encodeURIComponent(Search) 

  request({url: url, json: true}, (error, {body}) =>{
    if(!body.data[1]) {
      callback(undefined, console.log('Enter a correct name!'))
    }
    else if(body.data[0].title) {
      callback(undefined, {
        title: body.data[0].title,
        preview: body.data[0].preview,
        artist: body.data[0].artist.name,
        image: body.data[0].artist.picture_medium,
        link: body.data[0].link
      }      
      )
    } 
    else {
      callback(undefined,{
        error: 'Server is down!'
      })
    }
  })
}


module.exports = Track