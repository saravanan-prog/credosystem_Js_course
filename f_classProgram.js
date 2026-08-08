class Person {
   
    
    constructor(candidateName,candidateAge){
       this.candidateName = candidateName
       this.candidateAge  = candidateAge
    }

    getDetails(){
        return this.candidateName +" " + this.candidateAge
    }


}

Person = new Person("Ramesh",45)
let details = Person.getDetails()

console.log("details====>",details)