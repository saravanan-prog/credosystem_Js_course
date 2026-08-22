//Sync-code
console.log("First Attempt")
console.log("second Attempt")
console.log("third attempt")


//Async - Block
let data = Promise.resolve("Saravanan")
data.then((result) => console.log("result===>",result))

setTimeout(()=>{
    for(let i=0; i<1000000000; i++){}
    console.log("For loop Execution done")
},500)
/* End */


//Sync code
console.log("fith Attempt")
console.log("six Attempt")
console.log("seven attempt")