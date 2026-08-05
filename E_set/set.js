
/* example 1 - Remove duplicate Elements  SET method*/

// let numbers = [5,5,6,100,100,10,5,9,6]
// let set = new Set(numbers)
// let uniqueArrResult = [...set]
// console.log("uniqueArrResult =====>",uniqueArrResult)



let number = 22221115556688888
let result = [ ...new Set(number.toString().split(""))].join('')
console.log(result)