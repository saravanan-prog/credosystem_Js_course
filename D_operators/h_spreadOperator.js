function shallowCopy(){
    var fruits    = ["apple","orange","grapes","pineapple"]
    var newFruits = fruits

    newFruits[0] = "kiwi"
    newFruits[1] = "lichi"

    console.log("Orginial Fruits Array =====>",fruits)
    console.log("New  Fruits Array =====>",newFruits)
}

//shallowCopy()

function deepCopy_spreadOperator(){
    var fruits    = ["apple","orange","grapes","pineapple"]
    var newFruits = [...fruits]   /* Spread Operator (...) */                           

    newFruits[0] = "kiwi"
    newFruits[1] = "lichi"

    console.log("Orginial Fruits Array =====>",fruits)
    console.log("New  Fruits Array =====>",newFruits)
}

deepCopy_spreadOperator()
