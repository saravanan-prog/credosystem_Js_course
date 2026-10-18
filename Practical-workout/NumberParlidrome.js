
var originalNumber = 5555;
var reversedNumber =  String(originalNumber).split("").reverse().join("")
var convertNumberType = Number(reversedNumber)
var result = originalNumber === convertNumberType ? "palindorome" : "Not-palidrome"

console.log("result===>",result)
