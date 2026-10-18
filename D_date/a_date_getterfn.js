const DAYS = ["sunday","monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]


const timeStamp      =  new Date();
const year           =  timeStamp.getFullYear()
const currentMonth   =  MONTHS[timeStamp.getMonth()]
const month          =  timeStamp.getMonth() + 1
const currentDate    =  timeStamp.getDate()
const currentDay     =  timeStamp.getDay()
const hours          =  timeStamp.getHours()
const minutes        =  timeStamp.getMinutes()




console.log("time stamp====>",timeStamp)               // 2026-10-2026T13:06:25Z
console.log("year===>",year)                           // 2026
console.log("month Name ===>",currentMonth)           //  OCT
console.log("month Name ===>",month)                  // 10
console.log("currentDate===>",currentDate)            // 5
console.log("currentDay====>",currentDay)             // 1
console.log("day===>",DAYS[currentDay])               // monday
console.log("hours===>",hours)
console.log("minutes===>",minutes)











