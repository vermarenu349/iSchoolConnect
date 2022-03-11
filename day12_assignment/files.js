var file = require("fs");

setInterval(function(){
    file.appendFileSync("temp.txt","You only live once, but if you do it right, once is enough. \n","utf-8");
}, 5000);

file.watchFile("temp.txt",function(){
    console.log("file Changed");
});