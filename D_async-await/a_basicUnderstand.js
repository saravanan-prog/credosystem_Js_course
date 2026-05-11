
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


async function displayPrintStatement(){

   try{
        let data = await printStatement()
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