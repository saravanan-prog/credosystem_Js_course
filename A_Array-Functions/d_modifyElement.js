function RemoveMiddleofArrayElement(){

    var fruits = ["apple","orange","grapes","pineapple","mango"]
    console.log("Before Splice Fruis==========>",fruits)
    fruits.splice(2,2)           // splice(currentpos, howmanyElement)
    console.log("After Splice Fruis==========>",fruits)
}
//RemoveMiddleofArrayElement()

function modifyMiddleofArrayElement(){
    
    var fruits = ["apple","orange","grapes","pineapple","mango"]
    console.log("Before Splice Fruis==========>",fruits)
    fruits.splice(1,2,"kiwi","lichi")           // splice(currentpos, howmanyElement)
    console.log("After Splice Fruis==========>",fruits)
}

modifyMiddleofArrayElement()