let EventEmitter = require("events").EventEmitter;
let firstevent = new EventEmitter();

firstevent.on("IschoolConnect",function(){
    console.log("ischool Event Happend");
});

let timerId = setInterval(function(){
    firstevent.emit("IschoolConnect");
}, 2000);

setTimeout(function(){
    clearInterval(timerId); 
    console.log("ISchool Event Completed");
}, 12000);