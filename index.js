const fs = require('node:fs');
const http = require ("http");
const marked = require("marked");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
        fs.readFile("./README.md", 'utf8', (err, data) => {
		if (err) {
                        res.writeHead(500);
			res.end('File not found');
		} else {
			res.setHeader("Content-Type", "text/html");
			res.writeHead(200);
			const html = marked.parse(data.toString());
			res.end(html);
		}
	})
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
