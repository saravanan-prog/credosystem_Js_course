let user = {
    name : "saravanan",
    age : 32,
    work : "Software Engineer"
}

let userInfo = {
    location:"velachery",
    city:"chennai"
}

function clickMe(info){
    console.log("user clicked===>",this.name,"age===>",this.age,"location====>",info.location)
}

clickMe.call(user,userInfo)