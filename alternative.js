const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(chunk){
      body += chunk.toString();
    });
    req.on("end", function(){
      console.log(body);
      process.exit();
    });
  }
});

server.listen(29945);