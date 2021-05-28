/** @format */

const http = require("http");
const port = process.env.PORT || 5000;
const app = require("./app");

// Create Server
const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Hello World app is listening on port ${port} !`);
});
