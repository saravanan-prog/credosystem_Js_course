const personInfo = {
    name : "saravanan",
    dob  : "050-05-1994",
    des : "IT anayst",
    work : "Tcs",
    location : "chennai"
}


const personalInformation = {
    smoke  : true,
    dinkHabit : false,
    driving  : true,
    familyType : "neuclear" 
}


const  personFullinformation = {
    ...personInfo,
    ... personalInformation
}


console.log(personFullinformation)