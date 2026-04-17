let fruits = ["pinapple", "orange","grapes","zolo","apple"]

let sortedArr = fruits.sort();  //assending
let reversedArr = fruits.reverse() //desending


let number = [500,5,7,4,1,1000,750]

//HOF
let soretedNumber = number.sort((a,b)=>{
    return a-b
})

let reversedNumber = number.sort((a,b)=>{
    return b-a
})





console.log("reversedNumber===>",reversedNumber)