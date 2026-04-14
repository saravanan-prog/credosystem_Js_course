/* Example 1 */

function sumofCalulation(firstNumber,secondNumber){
  return firstNumber + secondNumber
}

let sumofResult = sumofCalulation();

/* Example 2 Simple Default Value */

function subraction(a = 1, b = 5) {
    return a + b;
}

let subractionResult1 = subraction(2, 3);        // your param result = 5
let subractionResult2 = subraction();            //  default result = 6




function intersetCalc( loanType="home-loan",principalAmount, interestRate=8 ){
 
  let accurateInterestAmount = principalAmount * interestRate / 100;
  let emiAmount = principalAmount + accurateInterestAmount
  return emiAmount
}

let result = intersetCalc(null,100000,10);





/* function rest parameter */

function homeLoanInterestCalc(...arg){
  
  let principalAmount = arg[0];
  let interestRate  =  arg[1]

  return principalAmount + (principalAmount * interestRate / 100)

}

let emiAmount = homeLoanInterestCalc(500000,8,"homeLoan","Indian-bank","chennai")

console.log("emi amount===>", emiAmount)










