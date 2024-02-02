var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		testFunction(this);
	}
};

xhttp.open("GET", "test.xml", true);
xhttp.send();

function testFunction(xml) {
	var xmlDoc = xml.responseXML;
	document.getElementById("testParagraph").innerHTML =
		xmlDoc.getElementsByTagName("testing")[0].childNodes[0].nodeValue;
}
