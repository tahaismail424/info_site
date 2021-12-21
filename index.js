const http = require('http');
const https = require('https');
const fs = require('fs');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;



fs.readFile('./index.html', (err, html) => {
    if (err) throw err;

    http.createServer((req, res) => {
        if (req.url === '/') {
            res.statusCode = 200;
            res.write(html);
            res.end();
        }
        else if (req.url === '/about') {
            res.statusCode = 200;
            fs.readFile('./about.html', (err, html2) => {
                if (err) {
                    throw err;
                }
                res.write(html2);
                res.end();
            });
        }
        else if (req.url === '/contact-me') {
            res.statusCode = 200;
            fs.readFile('./contact-me.html', (err, html3) => {
                if (err) {
                    throw err;
                }
                res.write(html3);
                res.end();
            });
        }
        else {
            res.statusCode = 404;
            fs.readFile('./404.html', (err, html4) => {
                if (err) {
                    throw err;
                }
                res.write(html4);
                res.end();
            });
        }
    }).listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
});




// const homeOptions = {
//     hostname: hostname,
//     port: port,
//     path: '/',
//     method: 'GET'
// }
// const aboutOptions = {
//     hostname: hostname,
//     port: port,
//     path: '/about',
//     method: 'GET'
// }

// const contactOptions = {
//     hostname: hostname,
//     port: port,
//     path: '/contact-me',
//     method: 'GET'
// }

// const aboutReq = https.request(aboutOptions, res => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on('about', () => {
//         res.writeHeader(200, {"Content-Type": "text/html"});
//         res.write(aboutPage);
//         res.end();
//     });
// });

// aboutReq.end();

// const contactReq = https.request(contactOptions, res => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on('contact', () => {
//         res.writeHeader(200, {"Content-Type": "text/html"});
//         res.write(contactPage);
//         res.end();
//     });
// });

// contactReq.end();

// const backReq = https.request(aboutOptions, res => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on('back', () => {
//         res.writeHeader(200, {"Content-Type": "text/html"});
//         res.write(homePage);
//         res.end();
//     });
// });

// backReq.end();


// let homeButtons = document.getElementsByClassName('home-button');
// let contactButtons  = document.getElementsByClassName('contact-button');
// let aboutButtons = document.getElementsByClassName('about-button');

// for (let button of homeButtons) button.addEventListener('click', eventEmitter.emit('back'));
// for (let button of contactButtons) button.addEventListener('click', eventEmitter.emit('contact'));
// for (let button of aboutButtons) button.addEventListener('click', eventEmitter.emit('about'));
