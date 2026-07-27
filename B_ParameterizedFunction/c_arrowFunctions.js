/* Example 1 - simple add*/
const addition = (a,b) => a + b
const additionResult = addition(100,200)


/* Example 2 - simplified arrow function */
const greetingMessage = (candidateName) => "Hello " + candidateName +"!!!"
const greetResult = greetingMessage("Saravanan")


/* Example 3 -  voter Eligble check status*/

const voterStatuscheck = age => age >= 18 ? "Eligble" : "Not-Eligible"
const status = voterStatuscheck(25)


/* Example 4 - Odd Numbers printing */

const printEvenNumbers = (limit) => {
    for(let i=1; i<=limit; i++){
        if(i % 2 == 0){
            console.log("Even===>",i)
        }
    }
    return "done"
}

printEvenNumbers(100)
