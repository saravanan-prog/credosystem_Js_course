const DAYS = ["sunday","monday","Tuesday","wednesday","Thursday","Friday","Saturday"]


let timeStamp      =  new Date();
let year           =  timeStamp.getFullYear()
let month          =  timeStamp.getMonth() + 1
let currentDate    =  timeStamp.getDate()
let currentDay     =  timeStamp.getDay() 


console.log("time stamp====>",timeStamp)
console.log("year===>",year)
console.log("month===>",month)
console.log("currentDate===>",currentDate)
console.log("day===>",DAYS[currentDay])









