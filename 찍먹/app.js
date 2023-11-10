const express = require('express');
const app = express(); // 객체 app을 만든 거임.
const port = 3000; // 사용할 포트 번호

//루트 경로 처리
app.get('/', (req, res) => {
  res.send('<h1>hello1</h1>');
}); // get함수의 매개변수는 두 개, 변수하나와 call-back 함수
// 저기서 /는 path를 의미.
// path는 예를들어 /shop말하는 것
// 그냥 슬래쉬는 경로가 도메인만 있는 것
// 함수 이름이 없는 익명함수 call-back 용도로만 쓰여서
// 매개변수 req, res
// req는 하나의 객체 유저의 요청
// req의 예시로는 url, 브라우저 정보, 기기정보, 접속한 위치 등등.
// res는 사용자에게 넘겨주는 객체
// 문자열을 띄우는 res.send

app.get('/home', (req, res) => {
  res.send('<h1>home</h1>');
}); 

app.post('/post', (req, res) => {
  res.send('<h1>post</h1>');
}); //html 상 버튼이 있어야 가능
// 주소를 입력하여 들어가는 방식 get이라 이건 주소 검색으로 못 들어감.


// 서버 시작
app.listen(port, () => { // 한 번 실행하게 되면 계속 실행하게 됨. 듣고 있게 하는거임.
  console.log('server is running');
}); // listen의 매개변수는 두 개 port와 call-back(함수)
// call-back이란 나중에 실행될 함수
// 포트에 대해서 listen하면서 그 작업이 끝나면 call-back

// 이건 서버와 클라이언트 둘다 내 컴으로 한다고 함.