
function greetings(name,treat,sayBye){

    setTimeout(()=>{
         console.log(`Hello ${name}`)
         treat()
         sayBye()
    },1000)
   
}

function treat(){
    console.log("Providing party")
}

function sayBye(){
    console.log("Good  Bye !!! ")
}


greetings("saravanan",treat,sayBye)






