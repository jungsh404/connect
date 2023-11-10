const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0601',
  database : 'test'
});

connection.connect();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', (req, res) => {
    connection.query('SELECT * from mbti', (error, rows, fields) => {
    if (error) throw error;
    res.send(`user infos are : ${rows}`);
    });
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
