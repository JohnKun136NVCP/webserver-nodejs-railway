
const http = require('node:http');


const server = http.createServer((req, res)=>{

    //res.setHeader('Content-Disposition','attachment; filename=list.csv');
    //res.writeHead(200,{'content-type':'aplication/csv'}); //Not found
    res.write("Hello");
    res.end();
})
.listen(8080);
console.log("Listening on port",8080);