function printStatement(){

   let str;

   let promise = new Promise(
      (resolve,reject) => {

         setTimeout(()=>  {
            str ="hi hello welcome to react Js world"
            resolve(str)
         },6000)

      }
   )



   return promise
}

 printStatement()
   .then(
      (data) => console.log("Full filled Block :::",data)
   )
   .catch(
      error => console.log("error Block :::", error)
   )


