function logicalOperators() {
    
  let candidateName = "saravanan";
  let candidateAge = 29;
  let canidadateLocation = "chennai";
  let canidateAvailable = true;
  let canidateSalary = 6000;

  let logicalAndResult = (candidateName == "ramesh" ) && (candidateAge == "25");
  let logicalOrResult = ( candidateName == "saravanan") || (candidateAge == "25");
  let notResultChecking = !canidateSalary

  console.log("logicalAndResult===>", logicalAndResult);
  console.log("logicalOrResult===>", logicalOrResult);
  console.log("notResultChecking===>", notResultChecking);


}

logicalOperators()


// && logical AND  = all true | false
// || logical OR   =  anone true 