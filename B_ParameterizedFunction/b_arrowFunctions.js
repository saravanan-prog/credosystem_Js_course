/* Example 1 - simple Arithmetic operation*/

const arithmeticOperation   = (a,b) => {

    let addResult = a + b
    let subractionResult =  a - b
    let multiplicationResult =  a * b

    let resultData = {
        "additionResult" : addResult,
        "subractionResult" : subractionResult,
        "multiplicationResult" : multiplicationResult
    }

    return resultData
}


const result = arithmeticOperation(100,200)

console.log("result ===>", result)






















