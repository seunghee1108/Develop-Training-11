const http = require('http');
const fs = require('fs');

const contentType = {
  'content-Type' : 'text.html',
  'charset' : 'utf-8'
}

const server = http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if(err) {
        console.log('파일 호출 에러');
      } else {
        response.writeHead(200, contentType);
        response.end(data);
      }
    })
  }
});
server.listen(8080);