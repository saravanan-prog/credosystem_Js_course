const name = "saravanan";
const age = 27
const degree = "MCA"


function addition(a,b){
    var c
    setTimeout(()=>{
        c = a + b
    })
    

    return c
}

function displayResult(){
    console.log("Your answer")
}



let result = displayResult()  // call by value

console.log(result)