//requiring stuff
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const Track = require('./utils/track')


const app = express()
const port = process.env.PORT || 3000

//Defining path. -_-
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

//Setting up handelbars. ;)
app.set('view engine', 'hbs')
app.set('views' , viewsPath )
hbs.registerPartials(partialsPath)

//Setting static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
  res.render('index', {
    title: "Deezer",
    name: 'Taha Rizwan'
  })
})

app.get('/track', (req,res) => {
  if(!req.query.Search) {
    return res.send(
      {error: 'Please provide an anime!'}
    )
  }
  Track(req.query.Search, ((error, {title, preview,artist, link, image}) => {
    if (error) {
      return res.send(error)
    }
    res.send({
      title,
      preview,
      artist,
      link,
      image,
      Search: req.query.Search
    })
  }))
 
})


app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
