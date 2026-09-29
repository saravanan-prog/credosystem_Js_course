function RemoveMiddleofArrayElement(){

    var fruits = ["apple","orange","grapes","pineapple","mango"]
    console.log("Before Splice Fruis==========>",fruits)
    fruits.splice(1,1)           // splice(currentpos, howmanyElement)
    console.log("After Splice Fruis==========>",fruits)
}

function modifyMiddleofArrayElement(){
    
    var fruits = ["apple","orange","grapes","pineapple","mango"]
    console.log("Before Splice Fruis==========>",fruits)
    fruits.splice(1,1,"kiwi","lichi")           // splice(currentpos, howmanyElement)
    console.log("After Splice Fruis==========>",fruits)
}

modifyMiddleofArrayElement()