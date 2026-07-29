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

let getCandidateName =  greetingsMessage()
let getFullname = getCandidateName()
let greetMessage = getFullname()

console.log("greetMessage=====>",greetMessage)
















