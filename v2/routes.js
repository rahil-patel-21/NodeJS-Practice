const fs = require('fs');

const routeHandler = (req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write("HELLO");
    }
    
    else if (url === '/hey') {
        res.write('Hey');
    }
    
    else if (url === '/new') {
        res.statusCode = 302;
        res.setHeader('Location', '/hey')
    }
    
    else if (url === '/message') {
        const body = [];
        req.on('data', (chunk)=> {
            body.push(chunk);
            console.log(chunk);   
        } ); 
        req.on('end', ()=> {
            const data = Buffer.concat(body).toString();
            console.log(data);
        });
        fs.writeFile('file.txt', 'rawData', (error)=> {
            console.log('Done')
        });
    }
   return  res.end();
};

// module.exports = routeHandler;
// module.exports = {
//     "handler" : routeHandler
// };
// module.exports.handler = routeHandler;
exports.handler = routeHandler;