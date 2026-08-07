function printStatement(){

   

   let promise = new Promise(
      (resolve,reject) => {

         setTimeout(()=>  {
            let str1 ="hi hello welcome to react Js world"
            let str2 = "Saravanan developer"
            resolve(str1 +" " + str2)
         },6000)

      }
   )



   return promise
}

 printStatement()
   .then(
      (data1,data2) => console.log("Full filled Block :::",data1)
   )
   .catch(
      error => console.log("error Block :::", error)
   )


