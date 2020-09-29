const trackForm = document.querySelector('form')
const search = document.querySelector('input')
const title = document.querySelector('#title')
const preview = document.querySelector('audio')
const artist = document.querySelector('#artist')
const image = document.querySelector('#image')
const link = document.querySelector('#link')

trackForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const track =  search.value 
  title.textContent = 'Loading...'
  console.log('Hello')
  artist.textContent = ''
  preview.src = ''
  image.style.display='none'
  link.href='none'
  fetch('track?Search=' + track).then((response) => {
    response.json().then((data) => {
      if (!data.title) {
        title.textContent = 'Please provide a correct name!'
      }
      title.textContent = data.title
      artist.textContent = 'Artist: ' + data.artist
      preview.src  = data.preview
      preview.style.visibility='visible'
      image.style.display='block'
      image.src=data.image
      link.href=data.link
    })
  })
})