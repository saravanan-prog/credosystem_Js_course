/* Example 1 */

function add(a, b) {
    return a + b;
}

let additionResult = add(2, 3);   



/* Simple Default Value */

function subraction(a = 1, b=5) {
    return a + b;
}


let subractionResult1 = subraction(2, 3);
let subractionResult2 = subraction();


/* function rest parameter */


function sumofCalc(...numbers) {

  let result = 0

  for(let item of numbers)
    result += item
  

  return result
  
}

let sumofCalcResult = sumofCalc(1,2,3,4,5,6,8)







function sumOfadditon(opType, ...numbers) {

  let result = 0

  if(opType == "add"){
    for(let item of numbers)
      result += item
  }

  return result

}

let sumofResult = sumOfadditon("add",1,2,3,4,5,6,8)

