/* Normal function  */


function welcomeMessage(){
    console.log("welcome to Javascript world")
}

welcomeMessage()

const expression = function (){
    console.log("welcome to Javascript world")
}
expression()







/* function Expression */

const addition =  function(){
    let a = 10;
    let b = 5
    return a + b;
}

let additionResult = addition();

console.log("additionResult===>",additionResult)




const loanEmiAmount = function (...arg){
  
  let principalAmount = arg[0];
  let interestRate  =  arg[1]

  return principalAmount + (principalAmount * interestRate / 100)

}

let homeloanResult = loanEmiAmount(100000,8)
//console.log("homeloanResult=====>",homeloanResult)