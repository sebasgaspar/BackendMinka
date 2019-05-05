//var express = require('express');
var http = require('http');
var fs = require('fs');

// var app = express();

function OnRequest(req,res){
  res.writeHead(200,{'Content-Type':'text/plan'});
  fs.readFile('./src/index.html',null, function(error,data){
    if(error){
      res.writeHead(404);
      res.write('file note found');
    }else{

      res.write(data);
    }
    res.end();
  });
}

http.createServer(OnRequest).listen(8000);
