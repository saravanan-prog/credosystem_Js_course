let orignalArr = [100,200,300,400,750]

let newArr = orignalArr.find(
    (value,index,arr) => {
        return value > 200
    }
)

console.log("newArr====>",newArr)