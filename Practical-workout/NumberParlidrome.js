
var originalNumber = 2222;
var sortedNumber = Number(originalNumber.toString().split().reverse().join(""))
var result = originalNumber === sortedNumber ? "palindorome" : "Not-palidrome"

console.log("result===>",result)
