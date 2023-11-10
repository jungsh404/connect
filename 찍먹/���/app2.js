const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호

//루트 경로 처리
app.get('/', (req, res) => {
  res.send('안녕하세요, Express 서버입니다!');
});

//추가 경로 처리
app.get('/home', (req, res) => {
    res.send('안녕하세요, home 입니다!');
});

app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 서버 시작
app.listen(port, () => {
  console.log('server is running');
});