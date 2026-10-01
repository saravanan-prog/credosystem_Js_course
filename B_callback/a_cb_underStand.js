
function greetings(canidateName,callback1,callback2){

    setTimeout(()=>{
        console.log(`Hello` + canidateName) 
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


greetings("Saravanan",treat,sayBye)










