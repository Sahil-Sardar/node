// const EventEmiter = require('events')
// const event = new EventEmiter();

const events = require('events');
const event = new events.EventEmitter();

event.on("sayMyName", ()=>{
    console.log("My Name Is Walter White")
})
event.on("sayMyName", ()=>{
    console.log("My Name Is Nie Li")
})
event.on("sayMyName", ()=>{
    console.log("My Name Is Luo Pao")
})
event.emit("sayMyName")


event.on("Profession", (years, msg)=>{
    console.log(`I'm a software engineer with almost ${years} of experience ${msg}`)
})
event.emit("Profession", 500, "but im not that good")