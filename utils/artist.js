const request = require('request')

const Artist = (Search, callback) => {
  const url = "https://api.deezer.com/artist/" + encodeURIComponent(Search) 

  request({url: url, json: true}, (error, {body}) =>{
    if(body.error) {
      callback(undefined, console.log('Enter a correct name!'))
    }
    else if(body.id) {
      callback(undefined, {
        title: body.name,
        fans: body.nb_fan,
        albums: body.nb_album,
        image: body.picture_medium,
        link: body.link
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


module.exports = Artist