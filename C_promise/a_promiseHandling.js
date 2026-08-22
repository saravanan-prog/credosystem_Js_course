function printStatement(){

   return new Promise(
      (resolve,reject) => {
         
         setTimeout(()=>  {
           let str1 ="hi hello welcome to react Js world"
           let str2 = "Saravanan developer"
            resolve(str1 +" " + str2)
           
         },6000)

        
      }
   )


}

 printStatement() 
   .then(
      (data) => console.log("Full filled Block :::",data)
   )
   .catch(
      error => console.log("error Block :::", error)
   )


