/* Example 1 - simple add*/
const addition = (a,b) => {
    let addResult = a + b
    let subractionResult =  a - b
    let multiplicationResult =  a * b

    return {
        "additionResult" : addResult,
        "subractionResult" : subractionResult,
        "multiplicationResult" : multiplicationResult
    }
}
const additionResult = addition(100,200)

console.log("additionResult ===>",additionResult.subractionResult)






















