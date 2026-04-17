let orignalArr = [100,200,300,400,750]

let multiplyFive = orignalArr.map((value,index,arr)=>{
    
    return value * 5
});

let multiply2 = orignalArr.map(val => val * 2 )






console.log("multiplyFive ====>",multiplyFive)

console.log("multiply2====>",multiply2)
