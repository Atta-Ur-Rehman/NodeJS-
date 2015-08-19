/**
 * Created by ATTA-UR- on 19/08/2015.
 */
var http = require('http');
http.createServer(function(req , res){
    res.write('<h1>First Node Js Class</h1>');
    res.end('Hello World');
}).listen(3000);
console.log("Listen port Server 3000");