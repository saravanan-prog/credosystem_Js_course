
function printStatement(){

   var promise = new Promise(

      (resolve,reject) => {

         setTimeout(()=>  {
            let str = "Hi Saravanan Welcome to React JS world";
            if(str)
               resolve(str)
            else
               reject("The string is empty")
         },6000)

      }
   )

   return promise
   
}



async function displayPrintStatement(){

   try{
      // let data =   printStatement()    // Returns to PENDING STATE
      let data =  await  printStatement() // wait for returns to FULLFILLED STATE
      console.log("data====>",data)  
      console.log("First")
      console.log("second")
      console.log("thrid")
   }
   catch(error){
      console.log("error===>",error)      // Returns to REJECTED STATE
   }


}

displayPrintStatement()