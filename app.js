const http = require('http');
const fs = require('fs');
const quereystring = require('querystring');
const signUpAsset = require('./module/signUp');
const contentType = {
  'content-Type' : 'text/html',
  'charset' : 'utf-8',
};

const server = http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/') {
    fs.readFile('./static/signup.html', (err, data) => {
      if(err) {
        console.error('파일 호출 에러');
      }
      else {
        response.writeHead(200, contentType);
        response.end(data);
      }
    });
  }
  
  // send html 파일 읽기 
  // requset.url === '/send.html?' 확인 (main에서는 ? 없이 연결됨)
  // method = POST 
    if(request.method === 'POST' && request.url === '/send.html'){
      // DB 저장용
      let body ='';
      request.on('data', (chunk) => {
        body += chunk.toString();
      });
      response.on('end', () => {
        const parseBody = quereystring.parse(body);
      });

    fs.readFile('./static/send.html', (err, data) => {
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
