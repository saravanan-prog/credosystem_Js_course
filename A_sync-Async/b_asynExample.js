//Sync-code
console.log("First Attempt")
console.log("second Attempt")
console.log("third attempt")

setTimeout(()=>{
    for(let i=0; i<1000000000; i++){}
    console.log("foruth attempt ")
},500)

setTimeout(()=>{
    console.log("fifth attempt")
},500)
/* End */


//Sync code
console.log("six Attempt")
console.log("seven Attempt")
console.log("eight attempt")