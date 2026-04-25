let orignalArr = [100,200,300,400,750]

let  isAvailable = orignalArr.some(
    (value,index,arr) => {
        return value > 200                       // some returns to boolean value - any one match true. otherwise false
    }
)

console.log("isAvailable====>",isAvailable)