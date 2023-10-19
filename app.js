const http = require('http');
const fs = require('fs');
const quereyString = require('querystring');

// // send.html 경로 변수 선언해줌
// let pathOne = "./static/send.html";
// // signup.html 경로 변수 선언해줌
// let pathTWo = "./static/signup.html";

const server = http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/') {
    fs.readFile('./static/signup.html', (err,data) => {
      if(err) {
        console.error('파일 호출 에러');
      }
      else {
        response.writeHead(200, {'contentType' : 'text/html'});
        response.end(data);
    }
  });
  if(request.method === 'POST' && request.url === '/send.html'){
    fs.readFile('./static/send.html', (err, data) => {
      if(err) {
        console.error('파일 호출 에러');
      }
      else {
        response.writeHead(200, {'contentType' : 'text/html'});
        response.end(data);
      }
    });
  } 

  let body = '';
  request.on('data', (chunk) => {
    body += chunk.toString();
  });
  request.on('end', () => {
    const parsedBody = quereyString.parse(body);
    const {username, password} = parsedBody;

    console.log(`form 입력으로부터 받은 데이터 확인 -> `, parsedBody);
    console.log(`form 입력으로부터 받은 데이터 확인 -> `, username);
    console.log(`form 입력으로부터 받은 데이터 확인 -> `, password);


    
    response.writeHead(200, {'contentType' : 'text/html'});
    response.end('로그인 성공!');
  });
  }
}).listen(8080);
//   () => {
//   console.log(`cli 창에서 컨트롤 누른 후 옆에 포트 누리면 편리하게 확인 -> http://localhost:${PORT}/`);
// })






















// const contentType = {
//   'content-Type' : 'text.html',
//   'charset' : 'utf-8'
// }
// const server = http.createServer((request, response) => {
//   if(request.method === 'GET' && request.url === '/') {
//     fs.readFile('./static/signup.html', (err, data) => {
//       if(err) {
//         console.error('파일 호출 에러');
//       }
//       else {
//         response.writeHead(200, contentType);
//         response.end(data);
//       }
//     });
//   }
//   // send html 파일 읽기 
//   // requset.url === '/send.html?' 확인 (main에서는 ? 없이 연결됨)
//   // method = POST 
//     if(request.method === 'POST' && request.url === '/send.html'){
//     fs.readFile('./static/send.html', (err, data) => {
//       if(err) {
//         console.error('파일 호출 에러');
//       }
//       else {
//         response.writeHead(200, contentType);
//         response.end(data);
//       }
//     });
//   }
// });
// server.listen(8080);






