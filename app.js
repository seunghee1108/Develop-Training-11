const http = require('http');
const fs = require('fs');

const contentType = {
  'content-Type' : 'text.html',
  'charset' : 'utf-8'
}

const server = http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/') {
    fs.readFile('./mod/signup.html', (err, data) => {
      if(err) {
        console.error('파일 호출 에러');
      }
      else {
        response.writeHead(200, contentType);
        response.end(data);
      }
    });
  }
    if(request.method === 'GET' && request.url === '/send.html?'){
    fs.readFile('./mod/send.html', (err, data) => {
      if(err) {
        console.error('파일 호출 에러');
      }
      else {
        response.writeHead(200, contentType);
        response.end(data);
      }
    });
  }
});
server.listen(8080);
