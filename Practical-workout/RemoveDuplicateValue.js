let number = [5,5,25,4,4,8,8]


// Remove a duplicate values

let uniqueArray = number.filter((value,index,arr)=>{
    return index === arr.indexOf(value)  
})



// Find a continous Element

let continousElement = number.filter((value,index,arr)=>{
    return index === arr.indexOf(value)  
})

console.log(uniqueArray)