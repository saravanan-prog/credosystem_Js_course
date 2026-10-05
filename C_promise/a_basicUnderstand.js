/* Example 1 */
console.log("first")
console.log("second")
console.log("third")

var candidateName = new Promise(
    (resolve,reject) => {
        setTimeout(()=>{
           resolve("saravanan")
        },1000)
    }
)

candidateName.then(
    (result) => {
        console.log("result========>",result)
        console.log("fourth")
        console.log("fifth")
        console.log("six")
    }
)
.catch( (error) => console.log("error====>",error))


