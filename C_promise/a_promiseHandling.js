
/* Example 1 */


let candidateName = new Promise(
   (resolve,reject) => {
      setTimeout(()=>{
         resolve("saravanan")
      },2000)
   }
)

candidateName
      .then( data => console.log(data))
      .catch(error => console.log(error))




/* Example 2 */

let candidateLastname = Promise.resolve("Durai")


candidateLastname
   .then( data => console.log("lastName===>",data))
   .catch(error=> console.error(error))






/* Example 3 */


function product(){

   let promise = new Promise((resolve,reject) =>{
      resolve("apple")
   })

   return promise
}

product().then(
   (data) => console.log("product===>",data)
)
