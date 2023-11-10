const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/home', (req, res) => {
    res.send('안녕하세요, home 입니다!');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login',(req,res)=>{
  if(req.body.id=='abc'&&req.body.pw=='1234'){
    res.send('로그인 성공');
  }
  else{
    res.send('로그인 실패');
  }
});
//sendFile함수
// 문자열 대신 파일을 보내줌.
// post방식에서
// req.body.id와 pw를 가져와서 로그인하는 방식


// 서버 시작
app.listen(port, () => {
  console.log('server is running');
});