let timeStamp = new Date();




let year = timeStamp.getFullYear()
let month = timeStamp.getMonth() + 1
let currentDate = timeStamp.getDate()
let expiredate  = currentDate + 10

let day = timeStamp.getDay()


let price = 1000
let offerPrice = price
if(currentDate > expiredate){
    offerPrice = price - (price * 5 /100)
}


console.log("currentDate===>",currentDate+10)

console.log("start")

switch(day){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
         console.log("TuesDay")
        return 
    
     case 3:
        day = "wednesDay"
        console.log("wednesDay")
        break; 
    
     case 4:
        console.log("Thursday")
       
        break 
    default:
        console.log("holiday")
        break;
}




