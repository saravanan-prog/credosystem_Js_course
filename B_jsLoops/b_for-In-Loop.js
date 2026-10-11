/* Example 1 - String Itteration */

function readStringChar(){

   var text = "Hello welcome to Javascript world"

   for(let key in text){
      console.log("key ===>",key,"====> text value===>",text.charAt(key))            // IN => Returns to key  **example = ink bottle
   }

}

//readStringChar()
 





/* Example 2 - Array Itteration */

function printFruitList(){

   var fruits = ["apple","orange","grapes","pineapple"]

   for(let key in fruits){
      console.log("Key====>",key,"Array value====>",fruits[key])            // IN => Returns to key  **example = ink bottle
   }

}

printFruitList()















