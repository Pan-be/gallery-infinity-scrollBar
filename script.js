// Unsplash API
const count = 10
const apiKey = "WyA-OSpt68DYBZ1z-2Gf1x4nYqEn-vSKbAcNqkcSBOY"

const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

const getPhotos = async () => {
	try {
		const response = await fetch(url)
		const data = await response.json
		console.log(data)
	} catch (error) {}
}
getPhotos()
