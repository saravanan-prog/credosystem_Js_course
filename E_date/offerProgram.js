let productPrice = 500;
let timeStamp = new Date()
let currentDate = new Date().getDate()
let expireDate = new Date().getDate() + 2

timeStamp.setDate(expireDate)

console.log("currentDate====>",currentDate)
console.log("expireDate====>",expireDate)

console.log("timeStamp", timeStamp);
console.log("Expire Date:", expireDate);

if(currentDate != expireDate){
    productPrice -= 100
}

// console.log("product Price===>",productPrice)