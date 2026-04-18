let principalAmount = 5000.25;
let intrest = "250";
let employeeName = "saravanan";
let loanStatus = true;
let result = 0;


console.log("principal Amount====>",typeof principalAmount)
console.log("employee Name   ====>",typeof employeeName)
console.log("employee status   ====>",typeof isEmployeestatus)


if(typeof principalAmount == "number" && typeof intrest == "number"){
    result = principalAmount + intrest
}
else{
    result = Number(principalAmount) + Number(intrest)
}

