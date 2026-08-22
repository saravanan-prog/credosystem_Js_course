
function printStatement(){

   return new Promise(
      (resolve,reject) => {

         setTimeout(()=>  {
            let str ="hi hello welcome to react Js world"
            resolve(str)
         },6000)

      }
   )

   
}


async function displayPrintStatement(){

   try{
      let data = await printStatement()   // result waiting stage
      console.log("data====>",data)
      console.log("First")
      console.log("second")
      console.log("thrid")
   }
   catch(error){
      console.log("error===>",error)
   }


}

displayPrintStatement()