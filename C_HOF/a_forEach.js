var numbersArray = [200,600,500,800,100,20,10]
var count = 0

const result = numbersArray.forEach(
    (value,index,arr) => {
        count += value
    }
)

console.log("count========>",count)



