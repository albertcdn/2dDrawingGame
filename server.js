var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});


var resemble = require('resemblejs');

// var diff = resemble("https://i.imgur.com/WlGDDvw.png")
    // .compareTo(dataURL)
    // .ignoreColors()
    // .onComplete(function(data) {
    //     console.log(data);
    //     /*
	// {
	//   misMatchPercentage : 100, // %
	//   isSameDimensions: true, // or false
	//   dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
	//   getImageDataUrl: function(){}
	// }
	// */
    // });