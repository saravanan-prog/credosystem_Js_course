/* Example 1 - Before object destrcture */

  let student = {
        "student_name" : "saravanan",
        "student_age"  : 5,
        "student_school":"dav matriculation",
        "student_location":"chennai"
  }

  const {student_name,student_age,student_school} = student

   console.log("student Name===>",student_name)
   console.log("student age===>",student_age)
   console.log("student school===>",student_school)







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


const {name,location,ourBranches,schoolType,records} = school  
const {firstSem,secondSem,finalSem} = records



console.log("school name ===>",name)
console.log("school location====>",location)
console.log("Branches====>",ourBranches)
console.log("school Type====>",schoolType)

console.log("school records====>",firstSem)