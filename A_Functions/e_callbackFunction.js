function processUser(name,callback) {


    setTimeout(()=>{
        console.log("Processing user:", name);
        callback()
       
    },1000)
    
   
}

function done() {
    console.log("Done!");
}

processUser("saravanan",done)



