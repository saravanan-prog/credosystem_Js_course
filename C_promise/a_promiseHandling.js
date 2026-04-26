
/* Example 1 */


let candidateName = new Promise(
   (resolve,reject)=>{
      resolve("Saravanan")
      
   }
)


candidateName.then(
   (data) => console.log("data===>",data)
).catch(
   (error) => console.error("error===>",error)
)


/* Example 2 */

let candidateLastname = Promise.resolve("Durai")
candidateLastname.then( data => console.log("lastName===>",data)).catch(error=> console.error(error))


