
const fruits = ["apple","orange","grapes"]

// const availableFruits = fruits   /* shallow copy - same memeory reference */
const availableFruits = [...fruits] /* Deep copy - Spread operator(...) */

availableFruits.push("gova")
availableFruits.push("pineapple")

console.log("Fruits====>",fruits)
console.log("availableFruits====>",availableFruits)