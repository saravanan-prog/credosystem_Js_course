/* Example 1 - Simple object creation - JSON [javascript object notaition] pattern  */

  let student = {
        "name" : "saravanan",
        "age"  : 5,
        "school" :"dav matriculation",
        "location":"chennai"
  }

//   console.log("student name ====>",student.name)
//   console.log("student school===>",student.age)
//   console.log("student location====>",student.location)














/* Example 2 - Embeded objects ***/

const employee =  {
    name : "saravanan",
    age : "28",
    location : "chennai",
    address: {
        temp : "2nd cross st, 4th ave west chennai ",
        parmanent : "Shivan kovil st, Tanjore"
    },
    isWorking : true,
    salary : 52454.25,
    skillset : ["Java","python","react","angular"],
    yearofExp : {
        "2022-2023": "Comodo security solutions",
        "2025-2026" : "Tata consultancy services"

    }
}
console.log("Temporary Address ===>",employee.address.temp)
console.log("Year of Experience 2022 to 2023 ===>",employee.yearofExp["2022-2023"])


