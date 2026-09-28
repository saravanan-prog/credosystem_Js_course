function numberToString(){
    var number1 = 100
    var number2 = 100

    var result = number1.toString() + number2.toString()

    console.log("result===>", result)
}





// String to Number

function stringToNumber(){
    var number1 = "100pt"
    var number2 = "100"
    var result = parseInt(number1) + parseInt(number2) 

    console.log("result===>", result)

}



function nanChecking(){
    var number1 = 100
    var number2 = "100"
    var result = isNaN(number2)

    console.log("result===>", result)

}
nanChecking()



