module.exports=function(request,response,next){
    var time=+new Date();
    var url=request.url;
    var stream=process.stdout;
    response.on('finish',function(){
        stream.write("\n"+time + "\nurl:"+url);
    });
    next();

};
