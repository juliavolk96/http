const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('server response');
});

const port = 7070;
// слушаем определённый порт
server.listen(port, (err) => {
    if (err) {
      return console.log('Error occured:', err)
    }
    console.log(`server is listening on ${port}`)
});
