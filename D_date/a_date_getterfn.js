const DAYS = ["sunday","monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]


var timeStamp      =  new Date();
var year           =  timeStamp.getFullYear()
var currentMonth   =  MONTHS[timeStamp.getMonth()]
var month          =  timeStamp.getMonth() +1
let currentDate    =  timeStamp.getDate()
let currentDay     =  timeStamp.getDay() 


console.log("time stamp====>",timeStamp)
console.log("year===>",year)
console.log("month Name ===>",currentMonth)
console.log("month Name ===>",month)
console.log("currentDate===>",currentDate)
console.log("currentDay====>",currentDay)
console.log("day===>",DAYS[currentDay])









