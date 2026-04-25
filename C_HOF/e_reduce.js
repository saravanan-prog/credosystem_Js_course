let priceList = [100,200,300,400,750]

let sumofArr = priceList.reduce(
    (acc,value,index,arr) => {
        return acc + value                          
    },0)


console.log("sumofArr=====>",sumofArr)
