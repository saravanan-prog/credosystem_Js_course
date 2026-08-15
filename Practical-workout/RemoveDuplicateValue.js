let number = [5,5,25,4,4,8,8]


// Remove a duplicate values

let uniqueArray = number.filter((value,index,arr)=>{

    return index === arr.indexOf(value)                   // 4  ==  3     [5,25,4,8]
     
})


console.log("unique Array -----> ", uniqueArray)   