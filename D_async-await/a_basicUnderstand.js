
function printStatement(){

   var promise = new Promise(
      (resolve,reject) => {

         setTimeout(()=>  {
            let str ="hi hello welcome to react Js world"
            resolve(str)
         },6000)

      }
   )

   return promise
   
}


async function displayPrintStatement(){

   try{
      let data =  await printStatement()   
      console.log("data====>",data) // Pending
      console.log("First")
      console.log("second")
      console.log("thrid")
   }
   catch(error){
      console.log("error===>",error)
   }


}

displayPrintStatement()