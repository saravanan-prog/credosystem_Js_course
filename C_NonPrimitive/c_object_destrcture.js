const school = {
    name : "DAV centeral board",
    location : "velachery",
    studentCount : 1000,
    schoolType: "CBSE",
    currentStatus : true,
    ourBranches : ["velachery","pallikarani","tambaram","selayiur"]
}

// destructure - logic

const { 
    name, 
    location,
    ourBranches 

} = school





console.log("school name ===>",name)
console.log("school location====>",location)
console.log("Branches====>",ourBranches)