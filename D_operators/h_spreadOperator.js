/**
 *    shallow copy vs deepcopy
 *    
 *   Spread operator => it is helps to copying an array element in deepcopy
 * 
 */

 
/** 
 *  Example  1 - Shallow copy 
 * 
 * 
 * */ 

var fruits = ["apple","orange","grapes","banana"]              // 200tkl856
var newFruits = fruits   /* Shallow copy */                    // &200tkl856


newFruits.push("pineapple")
newFruits.push("papaya")


//  console.log("Fruits ======>",fruits)
//  console.log("New Fruits=====>",newFruits)












/* Example2 - Spread operator  */ 




var fruits = ["apple","orange","grapes","banana"]             
var newFruits = [...fruits]                             /* Deep copy */
 
newFruits.push("gova")
newFruits.push("lichi")


console.log("fruits====>",fruits)
console.log("new Fruits====>",newFruits);
