let http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(8080);

let nazwa = "Kuba";
console.log(`Nazywam się, ${nazwa}`);
const kolory = ['czerwony', 'zielony', 'niebieski'];
kolory.forEach(kolor => console.log(kolor));
const dlugosc = kolory.map(kolor => kolor.length);
console.log(`długosć każdego koloru to: ${dlugosc}`);