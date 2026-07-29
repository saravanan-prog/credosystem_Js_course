var grade
var mark = 7

if(mark >= 90)
    grade = 'A'
else if(mark >= 75)
    grade = 'B'
else if(mark >= 35)
    grade = 'C'


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