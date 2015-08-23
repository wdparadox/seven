var http = require("http"),
    fs   = require("fs"),
    url  = require("url");
    http.createServer(function(req,res){
        var path = req.url.split("/")[1];
        fs.readFile(path,function(err,data){
            if(err){
                res.end("this page is not found , just seven1.html and seven2.html");
            }else{
                res.end(data);
            }
        })
    }).listen(80);