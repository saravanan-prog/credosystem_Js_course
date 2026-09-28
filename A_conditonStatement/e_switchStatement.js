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
// findGradeMeaning("B")

function findDayMeanings(day) {
    switch (day) {

        case "sunday":
            console.log(day + "is Holiday")
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


        default:
            console.log("Not listed you mentioned days")
    }
}

findDayMeanings("Sunday")

