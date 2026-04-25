let orignalArr = [100,200,300,400,750]

let  isAvailable = orignalArr.every(
    (value,index,arr) => {
        return value > 200                       //  all element match true. otherwise false
    }
)

console.log("isAvailable====>",isAvailable)