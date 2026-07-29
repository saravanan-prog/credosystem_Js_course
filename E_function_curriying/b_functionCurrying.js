function greetingsMessage(){

    let candidateFirstname = "Saravanan"
    let candidateLastname  = "Durai"

    return function (){
        let candidateFullname = candidateFirstname + candidateLastname

        return function(){
            return "Hello " + candidateFullname + " !!!"
        }
    }

}

let result =  greetingsMessage()()()

console.log("greetMessage=====>",greetMessage)