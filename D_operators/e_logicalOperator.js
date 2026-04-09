const productName = "headset";
const productPrice = 250;
const productisAvailable = true;
const productType = "accesaries"


const andResult = (productName == "headset") && (productPrice > 100) && (productisAvailable) // all conditon true = true otherwise false
const orResult = (productName == "mobile") || (productPrice > 100) || (productisAvailable) // any conditon true = true otherwise false



if(!productName){
    console.log("ProductName not avaible")
}




/* calulator */

let firstNumber =100;
let secondNumber = 500;

if(!firstNumber)
    console.log("First number is required")
else if(!secondNumber)
    console.log("second number is required")
else {
    let result  = firstNumber + secondNumber
    console.log("result====>",result)
}
   