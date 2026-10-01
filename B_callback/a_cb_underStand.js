
function greetings(callback1,callback2){

    setTimeout(()=>{
        console.log(`Hello Saravanan`) 
        callback1(callback2)
        
       
    },6000)
   
}

function treat(callback){
    setTimeout(() =>  {
        console.log(" Dining hall party")
        callback()
    
    
    } )
    
}

function sayBye(){
    console.log("Good  Bye !!! ")
}


greetings(treat,sayBye)










