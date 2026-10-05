function addTheElementBackside(){

    var fruits = ["apple","orange"]

    fruits.push("pineapple")                  // ["apple","orange",pineapple]
    fruits.push("grapes")                     // ["apple","orange",pineapple,"grapes"]
    fruits.push("mango")                      // ["apple","orange",pineapple,"grapes","mango"]

    console.log("fruits=====>",fruits)
}

//addTheElementBackside()









function addTheElementFrontSide(){

    var vegtable = ["onion","cabage"] 
    vegtable.unshift("tomoto")          //  ["tomoto","onion","cabage"]          
    vegtable.unshift("bringal")         //  ["bringal","tomoto","onion","cabage"]
 
   console.log("vegetables========>",vegtable)    

    
}

addTheElementFrontSide()








