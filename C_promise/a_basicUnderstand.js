/* Example 1 */


let candidateName = new Promise(
    (resolve,reject) => {
        setTimeout(()=>{
           resolve("saravanan")
        },5000)
    }
)

candidateName.then(
    (result) => console.log("result===>",result)
)
.catch( (error) => console.log("error====>",error))




/* Example 2 */
let candidateAge = Promise.resolve(27) 

candidateAge.then(
    result => console.log("age====>",result)
).catch(
    error => console.log("error ====>",error)
)