let timeStamp = new Date()
let modifiedTimestamp =  new Date(timeStamp);

modifiedTimestamp.setFullYear(2030)
modifiedTimestamp.setMonth(2)
modifiedTimestamp.setHours(10);
modifiedTimestamp.setMinutes(30);
modifiedTimestamp.setSeconds(45);
modifiedTimestamp.setMilliseconds(500);




console.log("timeStamp====>",timeStamp)
console.log("modifiedTimestamp====>",modifiedTimestamp)
