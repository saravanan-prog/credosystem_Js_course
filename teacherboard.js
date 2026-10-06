
var numbersArray = [200,600,500,800,100,20,10]


const result = numbersArray.reduce(          // acc = 2230
    (acc,value,index,arr) => {
        console.log("acc====>",acc)
        return acc + value
    },0)


console.log("result======>",result)