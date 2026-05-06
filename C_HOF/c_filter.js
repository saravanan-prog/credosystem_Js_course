let orignalArr = [100,200,300,400,750]

let greaterThen500 = orignalArr.filter(
    (value,index,arr) => {
        return value > 500
    }
)
console.log("500 greater then ====>",greaterThen500)

/* example 2 - Remove duplicate Elements */

let array = [5,5,6,100,100,10,5,9,6]

let uniqueArr = array.filter(
    (value,index,arr) =>{

        return arr.indexOf(value) == index         // 2 == 2      5
    }
)

console.log("unique Arrr ====>",uniqueArr)





