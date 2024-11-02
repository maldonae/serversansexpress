const http = require("node:http");
const app = http.createServer();

const handleRequest = (req, res) => {
	console.log(req.url);

	if (req.url === "/") {
		res.end("Hello World!");
	} else if (req.url === "/about") {
		res.end("About World!");
	} else {
		res.end("Not Found");
	}
};

app.on("request", handleRequest);

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
