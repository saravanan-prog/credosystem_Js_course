let orignalArr = [100,200,300,400,750]

let duplicateArr = orignalArr.map(
    (value,index,arr) =>{
        return value
    }
)


let newArrmulfive = orignalArr.map(
    (value,index,arr) =>{
        return value * 5
    }
)


console.log("orignalArr===>",orignalArr)
console.log("duplicateArr===>",duplicateArr)
console.log("newArrmulfive===>",newArrmulfive)








