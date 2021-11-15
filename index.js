//console.log(module);
// require

//import http module
var http=require('http')

// var server=http.createServer(function(req,res){
//     if(req.url=='/'){
//         res.end('Hellooooo')
//     }
//     else if(req.url=='/check'){
//         res.end('Hiiii')
//     }
    
// })

var server=http.createServer((req,res)=>{
    if(req.url=='/saveData'){
    if(req.method=='POST'){
        req.accept('application/json')
        var jsonString=''
       // console.log(req);
        req.on('data',function(data){
            jsonString+=data
           // console.log(jsonString);
        })
        req.on('end',function(){
            console.log(JSON.parse(jsonString));    
        })
    }
}})

server.listen(8989)

console.log('Server Started!!!');

// http://localhost:8989/saveData



