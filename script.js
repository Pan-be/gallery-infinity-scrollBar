const imageContainer = document.getElementById("image-container")
const loader = document.getElementById("loader")

let photosArr = []

const setAtributes = (element, attributes) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key])
	}
}

// create and add to DOM els for links and photos
const displayPhotos = () => {
	photosArr.forEach((photo) => {
		const el = document.createElement("a")
		const img = document.createElement("img")
		setAtributes(el, {
			href: photo.pageURL,
			target: "_blank",
		})
		setAtributes(img, {
			src: photo.webformatURL,
			alt: photo.tags,
			title: photo.tags,
		})
		imageContainer.appendChild(el)
		el.appendChild(img)
		// console.log(photo)
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
		// photosArr = await response.json()
		const photosObj = await response.json()
		photosArr = photosObj.hits
		displayPhotos()
		console.log(photosArr)
	} catch (error) {}
}

// load more photos when scrooling is near bottom
window.addEventListener("scroll", () => {
	// console.log("scrolled")
	if (
		window.innerHeight + window.scrollY >=
		document.body.offsetHeight - 1000
	) {
		getPhotos()
	}
})
getPhotos()
