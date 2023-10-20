const http = require('http');
const fs = require('fs');
const quereystring = require('querystring');
const signUpAsset = require('./module/signUp.js');
const idCheck = require('./module2/idcheck.js');
const pwCheck = require('./module2/pwcheck.js');
const emailCheck = require('./module2/emailcheck.js');
const contentType = {
  'content-Type' : 'text/html',
  'charset' : 'utf-8',
};
// const { sign } = require('crypto');

// 모듈을 이용할건데 그 모듈 중 createServer를 사용할 것이다. 
const server = http.createServer((request, response) => {
  // 첫번째 인자:GET , 두번째 인자:url
  if(request.method === 'GET' && request.url === '/') {
    fs.readFile('./static/signup.html', (err, data) => {
      if(err) {
        console.error('파일 호출 에러');
      }
      else {
        // GET 형식으로 url => 200 Ok하면 fs 쓸 것
        response.writeHead(200, contentType);
        response.end(data);
      }
    });
  }
  
  // send html 파일 읽기 
  // requset.url === '/send.html?' 확인 (main에서는 ? 없이 연결됨)
  // method = POST 
    if(request.method === 'POST' && request.url === '/send.html'){
      console.log('안녕');
      // DB 저장용
      // 빈값으로 유지하기 위해 선언해준것
      // 다음 사람을 위해(이번에 쓰고 다른사람 써야되니까 비워둔 것)
      // 초기화
      let body ='';
      // on은 method이다. :  실행해라
      // 메서드를 진행시키기 위해서 on이어야 한다.
      request.on('data', (chunk) => {        
        // 중복으로 계속 쌓아라.
        // body = body + chunk.toString()
        // temp :  비번 저장하시겠습니까 (임시저장소)
        // chunk : 청크라는 곳에 사람1,사람2 --이렇게 쌓이는 곳이다.
        // toString : 문자열로 변환해라
        body += chunk.toString();
      });
      // 익명함수라 ()비워둠.
      request.on('end', () => {
        // parseBody는 객체 = quereystring.parse(body) : body에 있는 내용을 문자열로 변환
        // quereystring :  가져올때 변환하겠다. (import:가져오다 parse:변환)
        const parseBody = quereystring.parse(body);
        // 역선언
        // 치약 , 칫솔줘 = 어디에서? parasebody에서
        const {id, pwOne, pwTwo, email} = parseBody;
        console.log(parseBody);
        // Object.assign(signUpAsset);
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
})
.listen(8080, () => {
  console.log("http://localhost:8080");
});