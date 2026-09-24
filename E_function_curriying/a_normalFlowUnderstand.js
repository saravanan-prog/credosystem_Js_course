function greetingsMessage(){

    var candidateFirstname = "Saravanan"
    var candidateLastname  = "Durai"

    return  () => {
        var candidateFullname = candidateFirstname + candidateLastname

        return () => {
            return "Hello " + candidateFullname + " !!!"
        }
    }

}

let getCandidateName =  greetingsMessage()
let getFullname = getCandidateName()
let greetMessage = getFullname()

console.log("greetMessage=====>",greetMessage)
















