/* Example 1 - Before object destrcture */

  let student = {
        "name" : "saravanan",
        "age"  : 5,
        "school":"dav matriculation",
        "location":"chennai"
  }

//   console.log("student Name===>",student.name)
//   console.log("student age===>",student.age)
//   console.log("student school===>",student['school'])







/* Example 2 -  object destrcture */

const school = {
    name : "DAV centeral board",
    location : "velachery",
    studentCount : 1000,
    schoolType: "CBSE",
    currentStatus : true,
    ourBranches : ["velachery","pallikarani","tambaram","selayiur"],
    records: {
        "firstSem" : "100% pass",
        "secondSem" : "90% pass",
        "finalSem" : "waiting the result"
    }
}


const {name,location,ourBranches,schoolType,records} = school  //object-destrcture.
const {firstSem,secondSem,finalSem} = records



console.log("school name ===>",name)
console.log("school location====>",location)
console.log("Branches====>",ourBranches)
console.log("school Type====>",schoolType)

console.log("school records====>",firstSem)