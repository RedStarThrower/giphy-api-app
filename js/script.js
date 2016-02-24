console.log($)

var apiKey = "dc6zaTOxFJmzC"

var baseUrl = "http://api.giphy.com/v1/gifs/random?api_key="

var fullUrl = baseUrl + apiKey

var pinkyPromise = $.getJSON(fullUrl)

var showData = function(jSonData) {
	console.log(jSonData)
	var imageObj = jSonData.data
	var container = document.querySelector("#container")
	container.innerHTML = objectToHTML(imageObj)
}

var objectToHTML = function(imageObj) {
	var imageHTML = '<img class="gif" src="' + imageObj.image_url + '">'
	return imageHTML
}

pinkyPromise.then(showData) // sets up showData to run when data is ready
