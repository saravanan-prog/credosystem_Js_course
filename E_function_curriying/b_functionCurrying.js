/* Functinal Closure - Currying Technique  */

function printTheGreetMessage(){

    var candidateFirstname = "Saravanan"
    var candidateLastname  = "Durai"

    return function (){
        var candidateFullname = candidateFirstname + " " + candidateLastname

        return function(){
            return "Hello " + candidateFullname + " !!!"
        }
    }

}

const result =  printTheGreetMessage()()()

console.log("result=====>",result)