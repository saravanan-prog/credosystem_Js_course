function printStatement(){

   var promise = new Promise(
      (resolve,reject) => {
         
         setTimeout(()=>  {
            const str1 ="hi hello welcome to react Js world"
            const str2 = "Saravanan developer"
            resolve(str1 +" " + str2)
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


