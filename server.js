const http = require('http'); 
const fs = require('fs'); 
const path = require('path'); 

const hostname = '127.0.0.1'; 
const port = 3000; 

const server = http.createServer((req, res) => { 
    let filePath = '.' + req.url; 

    if (filePath === './') { 
        filePath = './index.html'; 
    }

    const extname = String(path.extname(filePath)).toLowerCase(); 
    let contentType = 'text/html'; 

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.mp4':
            contentType = 'video/mp4';
            break;
        case '.woff':
            contentType = 'application/font-woff';
            break;
        case '.ttf':
            contentType = 'application/font-sfnt';
            break;
    }

    fs.readFile(filePath, (err, data) => { 
        if (err) { 
            res.statusCode = 500; 
            res.setHeader('Content-Type', 'text/plain'); 
            res.end('Error loading file\n'); 
            return; 
        }
        res.statusCode = 200; 
        res.setHeader('Content-Type', contentType); 
        res.end(data); 
    });
});

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});
