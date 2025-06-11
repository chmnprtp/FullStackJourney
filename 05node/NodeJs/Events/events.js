//! creation and handling
const EventEmitter = require("events");
const emitter = new EventEmitter();

console.log("first")

//? to handle an event we use on()
// syntax ==> emitter.on("event-name",()=>{})
emitter.on("myEvent",(value)=>{ // always use on method above emit
    console.log("event handled",value)
})

console.log("Middle")

//? to create an event we use emit()
// syntax ==> emitter.emit("event-name","arg2","arg2")
emitter.emit("myEvent","abc");


console.log("end")