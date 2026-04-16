let timeStamp = new Date();

let year = timeStamp.getFullYear()
let month = timeStamp.getMonth() + 1
let currentDate = timeStamp.getDate()
let day = timeStamp.getDay()

switch(day){
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "TuesDay"
        return 
    
     case 3:
        day = "wednesDay"
        break; 
    
     case 4:
        day = "Thursday"
        break 
}




let offerDate = currentDate + 10


console.log("day===>",day)


console.log(`${currentDate}-${month}-${year}`)