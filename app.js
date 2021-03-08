const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/') {
        res.write("HELLO");
     
    } else if (url === '/hey') {
        res.write('Hey');
    }
   return  res.end();

});

server.listen(3000);
//