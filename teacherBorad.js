const candidateName = "saravanan"
const candidateAge = 35

console.log("Candidate Name====>",candidateName)
console.log("Candidate Age====>",candidateAge)



if(candidateAge > 75 ){
    console.log("Eligble for Wings Program Level 3")
}
else if( candidateAge > 45){
    console.log("Eligble for Wings Program Level 2")
}   
else if( candidateAge > 25){
    console.log("Eligble for Wings Program Level 1")
}   
else {
    console.log("You are not Eligible any Current exams")
}