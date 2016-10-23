/**
 * Created by Administrator on 2016/10/23.
 */

var express =require('express');
var app =express;
app.get('/',function(req,res){
 res.render('index',{title:'首页'});

});



app.listen(3000);