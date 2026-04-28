let mark = 70;
let grade = null;

if(mark >= 90)
    grade = "A"
else if(mark >= 85)
    grade = "B"
else if(mark >= 70)
    grade = "C"
else
    grade = "F"



switch(grade){

    case "A":
        console.log("Excellent Performer")
        break;
    case "B":
        console.log("Average Performer")
        break;
    
    case "C" :
        console.log("Poor")
        break;

    default:
        console.log("Fail")
}