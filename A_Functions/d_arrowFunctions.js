
const greet = () => "welcome to arrow function world"
let greetResult = greet()

const greetNew = () => "Hello!";
let greetNewResult = greetNew()

const sum = (a,b) => a + b
let sumResult = sum(25,25)


/* Single Parameter (no parentheses needed) */
const homeLoanintrest = pricipalAmt => pricipalAmt * 8 /100
let sumResult = homeLoanintrest(100000)

const square = x => x * x;
let squareArea = square(10*10)



const addition = (firstNumber,secondNumber) =>  firstNumber + secondNumber
let additionResult = addition(25,25)

const loanEmiAmount = (principal,interestRate) => principal + (principal * interestRate / 100 )
let loanEmiAmountResult = loanEmiAmount(1000000,8)


const employeeDetails = (...arg) => {
    let empName = arg[0]
    let empSalary = arg[1]
    let bonus = empSalary * 3 /100
    let pf = 3600
    let netSalary  = empSalary + bonus - 3600
    return netSalary
} 
let employeeDetailsResult = employeeDetails("saravanan",50000)



const findCircleArea = (radius) => radius * radius * 22/7;
let circleArea = findCircleArea(10)



/* Single Parameter (no parentheses needed) */
const square = x => x * x;
let squareArea = square(10*10)



const add = (a, b) => a + b;
let additonResult = add(100,50)




/* Multiple lines (use {} and return) */

const promocodeValidation = (price,promocode) => {

    if(promocode = "sara20"){
        return price - price * 20 / 100;
    }
    else{
        return price
    }
 
};

let discountPrice = promocodeValidation(1000,"niva60")





