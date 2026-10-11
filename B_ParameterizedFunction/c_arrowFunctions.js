/* Example 1 - simple Arithmetic operation*/

const arithmeticOperation   = (firstNumber,secondNumber) => {    /* Parameter : firstNumber, secondNumber */

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


const arithemticResult = arithmeticOperation(100,200)                     /* Arugment : 100 200 */

console.log("arithemticResult========>",arithemticResult)




/* Example 2 -> Single Parameter function */

const addTitleName = name => 'MR.' + name
const result = addTitleName("saravanan")

console.log("result========>",result)


















