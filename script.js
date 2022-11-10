const imageContainer = document.getElementById("image-container")
const loader = document.getElementById("loader")

let photosArr = []

// create and add to DOM els for links and photos
const displayPhotos = () => {
	photosArr.forEach((photo) => {
		const el = document.createElement("a")
		el.setAttribute.href(photo)
	})
}

// API
// const count = 10
const apiKey = "28643468-0bfd18c65d82c5dc5dca3f2bd"

// const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
const url = `https://pixabay.com/api/?key=${apiKey}&category=backgrounds&image_type=photo&pretty=true`

const getPhotos = async () => {
	try {
		const response = await fetch(url)
		photosArr = await response.json()
		console.log(photosArr)
	} catch (error) {}
}
getPhotos()
