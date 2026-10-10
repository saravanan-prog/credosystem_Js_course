function logicalOperators() {
    
  var candidateName = "saravanan";
  var candidateAge = 29;
  var canidateSalary = 2000;

  var logicalAndResult = (candidateName == "ramesh" ) && (candidateAge == "25");       // False
  var logicalOrResult = ( candidateName == "saravanan") || (candidateAge == "25");     // True
  var notResultChecking = !canidateSalary                                              // false

  console.log("logicalAndResult===>", logicalAndResult);
  console.log("logicalOrResult===>", logicalOrResult);
  console.log("notResultChecking===>", notResultChecking);


}

logicalOperators()
// && logical AND  = all    true otherwise false
// || logical OR   =  anone  true => true