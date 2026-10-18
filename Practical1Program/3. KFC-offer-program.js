const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]

const currentTimeStamp = new Date()
const offerDay = "wednesday"
const currentDay = currentTimeStamp.getDay()    //0

const product = {
    name : "KFC buckket chicken",
    price : 499,
    availability : true
}


if(offerDay.toLowerCase() === days[currentDay].toLowerCase())
    product.price = product.price - (product.price * 50 / 100)

console.log("product=====>",product)
