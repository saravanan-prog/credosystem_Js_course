/* Example 1 - simple Arithmetic operation*/

const arithmeticOperation   = (firstNumber,secondNumber) => {

    var addResult            =  firstNumber + secondNumber
    var subractionResult     =  firstNumber - secondNumber
    var multiplicationResult =  firstNumber * secondNumber

    var resultData = {
        "additionResult" : addResult,
        "subractionResult" : subractionResult,
        "multiplicationResult" : multiplicationResult
    }

    return resultData
}


const result = arithmeticOperation(100,200)

console.log("Additon result ===>", result.additionResult)
console.log("Subraction result ===>", result.subractionResult)
console.log("Multiplication result ===>", result.multiplicationResult)
























