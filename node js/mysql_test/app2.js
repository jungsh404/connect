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

app.get('/home', (req, res) => {
    res.send('안녕하세요, home 입니다!');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});


app.post('/login',(req,res)=>{
  console.log('login');
  var memSet = {
    student_name : req.body.name,
    student_mbti : req.body.mbti
  };
  connection.query('INSERT INTO mbti SET ?', memSet, (error, rows, fields) => {
    if (error) throw error;
    });
});
//sendFile함수
// 문자열 대신 파일을 보내줌.
// post방식에서
// req.body.id와 pw를 가져와서 로그인하는 방식


// 서버 시작
app.listen(port, () => {
  console.log('server is running');
});







