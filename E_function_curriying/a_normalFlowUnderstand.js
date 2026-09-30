// Functional clousre 

function greetingsMessage(){

    var candidateFirstname = "Saravanan"
    var candidateLastname  = "Durai"

    return function (){

        var candidateFullname = candidateFirstname + " " + candidateLastname

        return function () {
            return "Hello " + candidateFullname + " !!!"
        }
    }

}

var greetingsMessageResult =  greetingsMessage()
var result                 = greetingsMessageResult()
var greetMessage           = result()

console.log("greetMessage=====>",greetMessage)
















