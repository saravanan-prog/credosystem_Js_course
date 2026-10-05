var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]


var currentTimeStamp = new Date()
var offerDay = "wednesday"
var currentDay = currentTimeStamp.getDay()

var product = {
    name : "KFC buckket chicken",
    price : 499,
    availability : true
}


if(offerDay == days[currentDay])
    product.price = product.price - (product.price * 50 / 100)

console.log("product=====>",product)
