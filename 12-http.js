//http module
const http = require('http')

const server = http.createServer((req, res)=>{
if (req.url==='/'){
    res.end(`<p>Welcome to our home page</p>
    <a href='/about'>Find out our history</a>`)
}
else if (req.url==='/about'){
    res.end(`<p>Here is our History</p>
    <a href='/'>Come home</a>`)
}
else res.end(`
<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href='/'>Go back to home page</a>`)
})

server.listen(5000)