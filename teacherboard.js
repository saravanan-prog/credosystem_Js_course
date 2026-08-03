const timeStamp = new Date()
let month = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
let day = ["sun","mon","tues","wed","thurs","fri","sat"]
let currentMonth = timeStamp.getMonth()
let currentDay   = timeStamp.getDay()
let currentDate  = timeStamp.getDate()
let currentYear  = timeStamp.getFullYear()

console.log("timeStamp====>",timeStamp)
console.log("currentMonth====>",month[currentMonth])
console.log("currentDau=====>",day[currentDay])
console.log(currentDate + '/'+ (currentMonth + 1)  + '/' + currentYear)