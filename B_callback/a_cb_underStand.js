
function greetings(canidateName,callback1,callback2){

    setTimeout(()=>{
        console.log(`Hello` +" " + canidateName)    
        callback1()      // treat
        callback2()
    },6000)
   
}

function treat(){
   
    console.log(" Dining hall party")  
}

function sayBye(){
    console.log("Good  Bye !!! ")
}


greetings("Saravanan",treat,sayBye)








