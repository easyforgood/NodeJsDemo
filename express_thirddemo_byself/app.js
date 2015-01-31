var express=require("express");
var app=new express();
var logger=require("./logger");
var ejs=require("ejs");
//app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(logger);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get("/user",function(req,res){
    res.write("This is a test\n");
    res.write("the input param is  " + req.query.name);
    res.end();

});

app.get("/",function(req,res){
	res.render('index');
	//console.log(___dirname__);
	//res.sendFile(__dirname+"/views/index.html");
	res.end();
	
});
app.listen(3001,function(){
    console.log('connectioning');
});
