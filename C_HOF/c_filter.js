let orignalArr = [100,200,300,400,750]

let greaterThen500 = orignalArr.filter(
    (value,index,arr) => {
        return value > 500
    }
)


console.log("500 greater then ====>",greaterThen500)








