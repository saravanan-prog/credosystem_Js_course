/* Example 1 - Simple object creation */

  let student = {
        "name" : "saravanan",
        "age"  : 5,
        "school":"dav matriculation",
        "location":"chennai"
  }

//   console.log("student Name ==>",student.name)
//   console.log("student age===>",student.age)
//   console.log("student school===>",student['school'])






/* Example 2*/

const employee = {
    name : "saravanan",
    age : "28",
    location : "chennai",
    isWorking : true,
    salary : 52454.25,
    skillset : ["Java","python","react","angular"],
    yearofExp : {
        "2022-2023" : "Comodo security solutions",
        "2025-2026" : "Tata consultancy services"

    }
}

console.log("employeee Name ======>",employee.name)   
console.log("employeee skillset ======>",employee.skillset)       
console.log("employeee main skill ======>",employee.skillset[2])
console.log("employee total experience details====>",employee.yearofExp)
console.log("current working status====>",employee.yearofExp["2025-2026"])