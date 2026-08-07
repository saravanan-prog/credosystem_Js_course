
function greetings(name,callback1,callback2){

    setTimeout(()=>{
        console.log(`Hello ${name}`)
        callback1()
        callback2()
    },1000)
   
}

function treat(){
    console.log("Providing party")
}

function sayBye(){
    console.log("Good  Bye !!! ")
}


greetings("saravanan",treat,sayBye)





