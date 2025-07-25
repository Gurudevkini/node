//htttp module
const path= require('fs')
const http= require('http');
const server= http.createServer(reg,res)=>
{
    const filepath=path.readFileSync('./sync/index.html');

    if(req.url=='/' )
    {
        res.write(filepath)
        res.end();
    }
    else if (req.url=='/')
    {
        res.write(filepath)
        res.end();

    } else 
      {
         res.writeHead(200,{'content-type':'text/html'})
         res.write('<h2>no such page</h2> <a href="http://localhost:5000?'>mainpage</a>
    
    }
}