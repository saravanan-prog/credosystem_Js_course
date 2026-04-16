let string = "Saravanan durai is a software developer"

let newStr = string.charAt(10).toUpperCase() + " " + string.slice(0,9)     

let reverseStr = newStr.split("").reverse().join("")

console.log(reverseStr)