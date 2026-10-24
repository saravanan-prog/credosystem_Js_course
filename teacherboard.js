
var numbersArray = [200,600,500,800,100,20,10]

/* HOF  */


const result = numbersArray.every(
    (value,index,selfArr) => {
        return value >= 500
    }
)

console.log("Old Array ====>",numbersArray)

console.log("result =====>",result)