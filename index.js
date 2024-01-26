//! index.js

const http = require("node:http");

const server = http.createServer((req, res) => {
    const superHero={
        firstName:"Bruce",
        lastName:"Wayne"
    }

  res.writeHead(200,{"Content-Type":"application/json"});
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});

//req gives information about incoming requests and res is used to send back response to client and we specify that server must listen to incoming requests on port 3000