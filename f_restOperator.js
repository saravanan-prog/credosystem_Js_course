

function addition(a,b,...rest){
    console.log("a====>",a)
    console.log("a====>",b)
    console.log("rest====>",rest)



    return a + b + rest.reduce((acc,value) => acc + value)

}

let result = addition(100,200,300,400,500,600,700,800,900)

console.log("result======>",result)