function printStatement() {

   var promise = new Promise(
      (resolve, reject) => {
         setTimeout(() => {
            const str1 = ""
            const str2 = ""
            if (str1 && str2)
               resolve(str1 + " " + str2)
            else
               reject("String is Empty")
         }, 6000)
      }
   )

   return promise
}

printStatement()
   .then(
      (data) => console.log("Full filled Block :::", data)
   )
   .catch(
      error => console.log("Error Block :::", error)
   )


