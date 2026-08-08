
const fruits = ["apple","orange","grapes"]


const newFruits = [ ...fruits ]                        // Deep copy
newFruits[3]  = "pineapple"

console.log("Fruits====>",fruits)                  
console.log("New Fruits =====>", newFruits)




