function findGradeMeaning(grade) {

    switch (grade) {
        case "A":
            console.log("Excellent Performer")
            break;
        case "B":
            console.log("Average Performer")
            break;

        case "C":
            console.log("Poor")
            break;

        default:
            console.log("Fail")
            break;
    }
}
//findGradeMeaning("A")


/* Example - 2 */

function findDayMeanings(day) {

    switch (day) {

        case "sunday":
            console.log(day + "is Second holiday")
            break;
        case "monday":
            console.log(day + "is start working day")
            break;

        case "tuesday":
            console.log(day + "is pooja day")
            break;

        case "wednesday":
            console.log(day + "is KFC day")
            break;
        
        case "Thursday":
            console.log(day + "Saibaba pooja")
            break;
        
        case "Friday":
            console.log(day + "Durga Pooja")
            break;
        
        case "saturday":
            console.log(day + "First holiday")
            break;


        default:
            console.log("Not listed you mentioned days")
    }
}

findDayMeanings("sunday")

