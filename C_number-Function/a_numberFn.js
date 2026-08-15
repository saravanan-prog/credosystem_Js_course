let number = 10.2545852

let fixed =  number.toFixed(3)         // 10.255   (after digit consider)
let precision = number.toPrecision(4) // 10.25     (Before all value consider)

console.log("Fixed====>",fixed)
console.log("precision===>",precision)


