function logicalOperators() {
    
  let candidateName = "saravanan";
  let candidateAge = 29;
  let canidadateLocation = "chennai";
  let canidateAvailable = true;
  let canidateSalary;

  let logicalAndResult = (candidateName == "ramesh") && (candidateAge == "25");
  let logicalOrResult = ( candidateName == "saravanan") || (candidateAge == "25");

  let notResultChecking = !canidateSalary

  console.log("notResultChecking===>", notResultChecking);
}

logicalOperators()