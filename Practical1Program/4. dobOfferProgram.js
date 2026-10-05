
var customer = {
    name :"Balakrishan",
    age : 28,
    dob : "1992-10-22"
}

var customerPurchasedItem = {
    name : "t-shirt",
    price : 1250
}

var currentMonth =  new Date().getMonth() + 1
var customerBirthMonth = customer.dob.split("-")[1]

if(currentMonth == customerBirthMonth){ 
    customerPurchasedItem.price =  customerPurchasedItem.price  - (customerPurchasedItem.price *  currentMonth / 100)
}
  


console.log(customerPurchasedItem)