function greetings(){

  var promise  = new Promise(
    (resolve,reject ) =>{
        setTimeout(()=> {
           console.log("Hello Rajesh")
           resolve("done")
        },5000)
    }
  )

  return promise
}

function treat(){

  var promise = new Promise(
    (resolve,reject)=> {
        setTimeout(()=>{
          console.log("Having treat")
          reject()
        },1000)

      
    }
  )
   
  return promise

 
  
}

function sayBye(){
  console.log("Say bye")
}

greetings().then(
  (data) => {
    treat().then(
      () => {
        sayBye()
      }
    )
    .catch(()=> console.log("Treat method some thing went wrong"))
  }
)
.catch(
  (error) => console.log("Greetings method something Went wrong !!!",error)
)
