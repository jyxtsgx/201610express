/**
 * Created by Administrator on 2016/10/23.
 */
var express =require('express');
var app =express();
app.get('/',function(req,res){
    res.end('hello world');
});
app.get('/student',function(req,res){
    res.end('hello student');
});
app.listen(8080);
