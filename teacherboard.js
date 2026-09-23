function printTheStatement(){
    var canidateName = "Saravanan"
    var candidateAge = 29

    if(true){

        let candidateWorkLocation = "Banglore";
        let canidateWorkPosition = "Manger";

        console.log("True block inside candidateAge ===>",canidateName)
        console.log("True block inside candidateAge ===>",candidateAge)

        console.log("True block inside candidateWorkLocation ===>",candidateWorkLocation)
        console.log("True block inside canidateWorkPosition ===>",canidateWorkPosition)
    }

    console.log("True block outside candidateAge ===>",canidateName)
    console.log("True block outside candidateAge ===>",candidateAge)

    console.log("True block outside candidateWorkLocation ===>",candidateWorkLocation)
    console.log("True block outside candidateWorkLocation ===>",candidateWorkLocation)

}

printTheStatement()