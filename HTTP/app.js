//HTTP MODULE

const http = require('http');

const server = http.createServer((request , response) =>{
    if(request.url==='/'){

     response.write("welcone to nodejs")
     response.end();
    }
     if(request.url ==='/about'){

        response.write("welcone tokkkkkkjs")
     response.end();
     }
     response.writeHead(500, {'content-type':'text/html'})
     response.write('<h2>NO sUCH PAGE</h2><a href="http://localhost:5000/">main page</a>')
     response.end()
})
server.listen(5000, ()=> {
    console.log("server is running at port 5000")
})