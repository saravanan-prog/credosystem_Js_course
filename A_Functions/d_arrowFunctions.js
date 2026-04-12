
/* Arrow functions */
const greetNew = () => "Hello!";
let message = greetNew()



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





