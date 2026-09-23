
function removeanElementBackside(){
    
    var fruits = ["apple","orange","grapes","pineapple","lichi","kiwi"]

    fruits.pop()   // ["apple","orange","grapes","pineapple","lichi"]
    fruits.pop()   // ["apple","orange","grapes","pineapple"]
    fruits.pop()   // ["apple","orange","grapes"]

    return fruits
}

var result = removeanElementBackside()
console.log("pop method result ====>", result)


function removeAnElementFrontside(){

    var vegetable = ["onion","bringal","tomato","cabage","carrot"]
    vegetable.shift()       // ["bringal","tomato","cabage","carrot"]
    vegetable.shift()       // ["tomato","cabage","carrot"]
    vegetable.shift()       // ["cabage","carrot"]

    return vegetable
}


var result = removeAnElementFrontside()
console.log("shift method result  =====>",result)