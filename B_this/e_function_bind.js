let user = {
    name : "saravanan",
    age : 32,
    work : "Software Engineer"
}

let userInfo = {
    location:"velachery",
    city:"chennai"
}

let x = 100
let y = 200

function clickMe(info,x,y){
    console.log("user clicked===>",this.name,"age===>",this.age,"location====>",info.location)

    console.log("x====>",x)
    console.log("y====>",y)
}

let newFunction = clickMe.bind(user,userInfo,x,y)

newFunction()