const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('A tasty new Node home page')
    } else if (req.url === '/about') {
        res.end('What\'s it all about?')
    } else {
        res.end('Oops!')
    }
})

server.listen(5000)