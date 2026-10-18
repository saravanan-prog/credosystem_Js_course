/* Example 2 - Push Method add the value Back side */


function addTheElementBackside(){

    const fruits = ["apple","orange"]

    fruits.push("pineapple")                  // ["apple","orange",pineapple]
    fruits.push("grapes")                     // ["apple","orange",pineapple,"grapes"]
    fruits.push("mango")                      // ["apple","orange",pineapple,"grapes","mango"]

    console.log("fruits=====>",fruits)
}

//addTheElementBackside()



/* Example 2 - Unshift Method add the value front side */


function addTheElementFrontSide(){

    const vegtable = ["onion","cabage"] 
    vegtable.unshift("tomoto")          //  ["tomoto","onion","cabage"]          
    vegtable.unshift("bringal")         //  ["bringal","tomoto","onion","cabage"]
 
   console.log("vegetables========>",vegtable)    

    
}

addTheElementFrontSide()








