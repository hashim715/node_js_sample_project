const http = require("http");
const fs = require('fs');
const homefile=fs.readFileSync("index.html","utf-8");
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write(homefile);
        res.end();
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("listeining to the server");
});