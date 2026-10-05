const DAYS = ["sunday","monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]


var timeStamp      =  new Date();
var year           =  timeStamp.getFullYear()
var currentMonth   =  MONTHS[timeStamp.getMonth()]
var month          =  timeStamp.getMonth() + 1
var currentDate    =  timeStamp.getDate()
var currentDay     =  timeStamp.getDay()
var hours          =  timeStamp.getHours()
var minutes        =  timeStamp.getMinutes()




console.log("time stamp====>",timeStamp)               // 2026-10-2026T13:06:25Z
console.log("year===>",year)                           // 2026
console.log("month Name ===>",currentMonth)           //  OCT
console.log("month Name ===>",month)                  // 10
console.log("currentDate===>",currentDate)            // 5
console.log("currentDay====>",currentDay)             // 1
console.log("day===>",DAYS[currentDay])               // monday
console.log("hours===>",hours)
console.log("minutes===>",minutes)
console.log("zone===>",zone)











