let number = new Promise((resolve,reject) => resolve(100))

number
   .then( item => console.log("data==>",item))
   .catch (error => console.log("error==>",error))
    




let candidateName = Promise.resolve("Saravanan")

candidateName
    .then( item => console.log("resolved===>",item))
    .catch(error => console.log(error))

