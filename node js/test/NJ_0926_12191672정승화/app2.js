const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});

app.post('/login',(req,res)=>{
  res.sendFile(__dirname + '/login.html');
});

app.post('/select',(req,res)=>{
  res.sendFile(__dirname + '/select.html');
});

app.post('/insert',(req,res)=>{
  res.sendFile(__dirname + '/insert.html');
});

app.post('/delete',(req,res)=>{
  res.sendFile(__dirname + '/delete.html');
});
//sendFile함수
// 문자열 대신 파일을 보내줌.
// post방식에서
// req.body.id와 pw를 가져와서 로그인하는 방식


// 서버 시작
app.listen(port, () => {
  console.log('server is running');
});