function firstFunction(){

    return function (){

        return function (){
           return "I am Thrid function"
         }

          
    }

     


}

let data =  firstFunction()()()

console.log("data====>",data)















