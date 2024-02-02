const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	
	res.setHeader('Content-Type', 'text/html');

	let path = './';
	switch(req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
	}

	fs.readFile(path, (err,data) => {
			if(err){ 
				console.log(err)
				res.end();
			}
			else{
				res.end(data);
			}
		});
	});
	
	server.listen(3000, 'localhost', () => {
		console.log("escutando porta 3000");
	});
