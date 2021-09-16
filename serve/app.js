const express = require('express')
const bodyp = require('body-parser');
const { query } = require('express');

const app = express();

let arrData = [
    {name: '张三', gender: '男', email: '89313@qq.com'}
]

//设置跨域访问
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})


app.use(bodyp.json())

app.get('/', (req,res) => {
    res.send(arrData);
    res.end()
})

app.post('/', (req,res) => {
    arrData.push(req.body)
    console.log(arrData)
    res.end()
})

app.delete('/:name',(req,res) => {
    arrData.splice(arrData.findIndex((ele) => ele.name === req.params.name),1)
    res.end()
})

app.put('/:name', (req,res) => {
    arrData.forEach((ele) =>{
        if(ele.name === req.params.name) {
            ele.gender = req.body.gender
            ele.email = req.body.email
        }
    })
    res.end()
})

app.use(express.static('public'))


app.listen(3000, () => {
    console.log('server running')
})