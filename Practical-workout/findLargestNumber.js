var number = 62584688

var desendingOrder = new Set( String(number).split("").sort((a,b) => b-a ))
var convertResultArr = [...desendingOrder]

console.log( "First Largest Value ====>",convertResultArr[0])
console.log(" Second Largest Value ====>",convertResultArr[1])