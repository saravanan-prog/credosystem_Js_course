
/* Example 1 : String to Number */

function convertStringToNumber(){
    var firstNumber = "100"
    var secondNumber = "500"

    firstNumber  =  Number(firstNumber)
    secondNumber =  Number(secondNumber)

    var result  = firstNumber + secondNumber;    // 600
    console.log("result=====>",result)
}

 //convertStringToNumber()






/* Example 2 : Number to String */

function stringToNumber(){
    
    var firstNumber = 100
    var secondNumber = 500

    firstNumber  =  String(firstNumber)
    secondNumber =  String(secondNumber)

    var result  = firstNumber * secondNumber;         //100500

    console.log("result=====>",result)

}
//stringToNumber()



/* Example 3 : Boolean conversation */
function NumberToBoolean(){
    
    var trainnerStatus = 1
    var result = Boolean(trainnerStatus)
    console.log("result=====>",result)

}
NumberToBoolean()






