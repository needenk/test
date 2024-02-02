function callxhtpp(file, isJSON, callback){
	var xhttp = new XMLHttpRequest();

	if(isJSON){
		xhttp.overrideMimeType("application/json");
	}
	
	xhttp.open("GET", file, true);

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			callback(xhttp);
		}
	}
	xhttp.send();
}

callxhtpp("test.xml", false, function(xml){
	var xmlDoc = xml.responseXML;
	document.getElementById("testParagraph").innerHTML =
		xmlDoc.getElementsByTagName("testing")[0].childNodes[0].nodeValue;
});

callxhtpp("testJSON.json", true, function(testJSON){
	let obj = JSON.parse(testJSON.responseText);
	document.getElementById("testParagraphJSON").innerHTML = obj.testing;
});