const artistForm = document.querySelector('form')
const search = document.querySelector('input')
const title = document.querySelector('#title')
const albums = document.querySelector('#albums')
const image = document.querySelector('#image')
const link = document.querySelector('#link')
const fans = document.querySelector('#fans')

artistForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const artist =  search.value 
  title.textContent = 'Loading...'
  console.log('Hello')
  fans.textContent = ''
   albums.textContent = ''
  image.style.display='none'
  link.href='none'
  fetch('artists?Search=' + artist).then((response) => {
    response.json().then((data) => {
      if (!data.title) {
        title.textContent = 'Please provide a correct name!'
      }
      title.textContent = data.title
      albums.textContent = 'No. of albums: ' + data.albums
      image.style.display='block'
      image.src=data.image
      link.href=data.link
      fans.textContent = 'No. of fans: ' +data.fans
    })
  })
})