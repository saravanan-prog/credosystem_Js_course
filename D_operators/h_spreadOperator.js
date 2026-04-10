/**
 *    shallow copy vs deepcopy
 *    
 *   Spread operator => it is helps to copying an array element in deepcopy
 * 
 */

 
/** 
 *  Example  1 - Shallow copy 
 * */ 

var fruits = ["apple","orange","grapes","banana"]             

var newFruits = fruits   /* Shallow copy */


newFruits.push("gova")
newFruits.push("banana")



// console.log("fruits====>",fruits)
// console.log("new Fruits====>",newFruits);


/** 
 *  Example  2 - Deep copy 
 * 
 *  Spread Operator (...)
 * 
 * 
 * */ 




var fruits = ["apple","orange","grapes","banana"]             
var newFruits = [...fruits]                             /* Deep copy */
 
newFruits.push("gova")
newFruits.push("banana")


console.log("fruits====>",fruits)
console.log("new Fruits====>",newFruits);
