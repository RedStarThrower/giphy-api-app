console.log($)

var apiKey = "&api_key=dc6zaTOxFJmzC"

var baseUrl ="http://api.giphy.com/v1/gifs/search?q="

var container = document.querySelector("#container")

// Input

var inputEl = document.querySelector("input")

var doRequest = function(searchQuery) {
		var fullUrl = baseUrl + searchQuery + apiKey
		var pinkyPromise = $.getJSON(fullUrl)
		pinkyPromise.then(showData)
}


var userSearch = function(keyEvent) {
	var inputEl = keyEvent.target
	if (keyEvent.keyCode === 13) {
		var searchQuery = inputEl.value
		inputEl.value = ""
		doRequest(searchQuery)
	}

}

inputEl.addEventListener("keydown", userSearch)


// Display Gifs

var showData = function(jSonData) {
	//console.log(jSonData)
	var newHTMLString = ""
	var imageArr = jSonData.data
	for (var i = 0; i < imageArr.length; i++) {
		var imageObj = imageArr[i]
		newHTMLString += objectToHTML(imageObj)
		container.innerHTML = newHTMLString

	}	
}

var objectToHTML = function(imageObj) {
	var theUrl = imageObj.images.original.url
	var imageHTML = '<img class="gif" src="' + theUrl + '">' 
	return imageHTML
}

 // sets up showData to run when data is ready
