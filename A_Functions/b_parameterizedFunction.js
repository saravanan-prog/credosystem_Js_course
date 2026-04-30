/* Example 1 */

function sumofCalulation(firstNumber,secondNumber){
  return firstNumber - secondNumber
}

let strResult = sumofCalulation("100",50);
let numResult = sumofCalulation(100,50);














/* Example 2 Simple Default Value */

function subraction(a = 1, b = 2 ) {
    return a - b;
}

let subractionResult1 = subraction(2, 3);        
let subractionResult2 = subraction();     
//console.log("subractionResult2====>",subractionResult2)







function intersetCalc( principalAmount, interestRate = 8 ,loanType="home-loan"){
 
  let accurateInterestAmount = principalAmount * interestRate / 100;
  let emiAmount = principalAmount + accurateInterestAmount
  return emiAmount
}

let result = intersetCalc(100000,11.25);












/* function rest parameter */

function homeLoanInterestCalc(...arg){

  console.log("arg==========>",arg)
  
  let principalAmount = arg[0];
  let interestRate  =  arg[1]

  return principalAmount + (principalAmount * interestRate / 100)

}

let emiAmount = homeLoanInterestCalc(500000,8,"homeLoan","Indian-bank","chennai")

console.log("emi amount===>", emiAmount)










