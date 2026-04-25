let number = [100,200,300,400,750]

let sumofArr = 0

number.forEach(
    (value,index,arr) => {
        sumofArr += value
    }
)

console.log("sumofArr===>",sumofArr)

