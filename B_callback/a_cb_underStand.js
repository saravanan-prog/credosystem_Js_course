
function greetings(name,treat,sayBye){

    setTimeout(()=>{
        console.log(`Hello Saravanan`) 
        treat()
        sayBye()
    },6000)
   
}

function treat(){
    console.log(" Dining hall party")
}

function sayBye(){
    console.log("Good  Bye !!! ")
}


greetings("Saravanan",treat,sayBye)









