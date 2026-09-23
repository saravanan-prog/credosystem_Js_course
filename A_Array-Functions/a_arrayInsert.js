function addTheElementBackside(){

    var fruits = ["apple","orange"]

    fruits.push("pineapple")                  // ["apple","orange",pineapple]
    fruits.push("grapes")                     // ["apple","orange",pineapple,"grapes"]
    fruits.push("mango")                      // ["apple","orange",pineapple,"grapes","mango"]

    return fruits
}

var result = addTheElementBackside()
console.log("Push method Result ===>",result)

function addTheElementFrontSide(){

    let vegtable = ["onion","cabage"] 
    vegtable.unshift("tomoto")          //  ["tomoto","onion","cabage"]          
    vegtable.unshift("bringal")         //  ["bringal","tomoto","onion","cabage"]
 
    return vegtable    

    
}

var result = addTheElementFrontSide()
console.log("Pop method Result ===>",result)








