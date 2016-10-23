/**
 * Created by Administrator on 2016/10/23.
 */
var express =require('express');
var app =express();
app.get('/',function(req,res){
    res.end('hello world');
});
app.post('/',function(req,res){
    res.end(' post hello student');
});
app.delete('/',function(req,res){
    res.end(' delete hello student');
});
app.put('/',function(req,res){
    res.end(' put hello student');
});



app.listen(8080);
