let productPrice = 500;
let currentDate = new Date().getDate()
let offerDate = currentDate + 2

if(currentDate != offerDate){
    productPrice -= 100
}

console.log("product Price===>",productPrice)