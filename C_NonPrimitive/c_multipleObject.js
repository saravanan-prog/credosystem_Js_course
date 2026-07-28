const employees = [
    {
        name : "saravanan",
        age : "28",
        location : "chennai",
        address: {
            temp : "2nd cross st, 4th ave west chennai ",
            parmanent : "Shivan kovil st, Tanjore"
        },
        isWorking : true,
        salary : 52454.25,
        skillset : ["Java","python","react","angular"]
    },

    {
        name : "Nisha",
        age : "25",
        location : "chennai",
        address: {
            temp : "2nd cross st, 4th ave west chennai ",
            parmanent : "Shivan kovil st, Tanjore"
        },
        isWorking : true,
        salary : 30002.25,
        skillset : ["html","css","bs"]
    },
    {
        name : "sivakumar",
        age : "35",
        location : "chennai",
        isWorking : true,
        address: {
            temp : "2nd cross st, 4th ave west chennai ",
            parmanent : "Shivan kovil st, Tanjore"
        },
        salary : 30002.25,
        skillset : ["html","css","bs",".net","devops"]
    }
]

console.log("employees------>",employees[1].address.temp)