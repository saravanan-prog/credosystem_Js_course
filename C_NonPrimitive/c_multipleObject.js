const employees = [              
    {
        name : "saravanan",
        age : "28",
        location : "chennai",
        address: {
            temp : {
                doorNumber:22,
                streetName:"car st",
                area:"velachery",
                city:"chennai",
                pincode:600042
            },
            parmanent : {
                doorNumber:22,
                streetName:"car st",
                area:"velachery",
                city:"chennai",
                pincode:600042
            },
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
            temp : {
                doorNumber:22,
                streetName:"car st",
                area:"velachery",
                city:"chennai",
                pincode:600042
            },
            parmanent : {
                doorNumber:22,
                streetName:"car st",
                area:"velachery",
                city:"chennai",
                pincode:600042
            },
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
            temp : {
                doorNumber:22,
                streetName:"car st",
                area:"velachery",
                city:"chennai",
                pincode:600042
            },
            parmanent : {
                doorNumber:22,
                streetName:"car st",
                area:"velachery",
                city:"chennai",
                pincode:600042
            },
        },
        salary : 30002.25,
        skillset : ["html","css","bs",".net","devops"]
    }
]

console.log("Nisha house Temp Address Door Number====>",employees[1]?.address?.temp?.doorNumber)