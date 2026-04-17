let priceList = [100,200,300,400,750]
var gst =  25

let grandTotal =  priceList.reduce( (acc,value) => acc + value , 0)

console.log("grandTotal ====>",grandTotal)