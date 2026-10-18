var months = ["jan","feb","March","apr","may","jun","jul","aug","sep","oct","nov","dec"]
var timeStamp = new Date()
var currentMonth = timeStamp.getMonth()
var currentDate = timeStamp.getDate()
var currentYear  = timeStamp.getFullYear()
var formatteData =  currentDate + "/" + (currentMonth + 1) + "/" + currentYear
var currentDay   = timeStamp.getDay()



console.log("currentDay===========>",currentDay)