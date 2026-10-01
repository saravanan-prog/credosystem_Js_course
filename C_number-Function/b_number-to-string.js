function numberToString(){
    var number1 = 100
    var number2 = 100

    var result = number1.toString() + number2.toString()

    console.log("result===>", result)
}





// String to Number

function stringToNumber(){
    var avalilableSqft = "1800sqft"
    var perSqft = "250 Rs"
    var actualLandPrice  = parseInt(avalilableSqft) * parseInt(perSqft) 

    console.log("actualLandPrice===>", actualLandPrice)

}
stringToNumber()





