    
    const user = {
        "name": "Saravanan",
        "lastName" : "Durai",
        "age": 25,
        "isLoggedIn": true,  
    };
    
    
    const keys    =  Object.keys(user)           // Retrive the keys
    const values  =  Object.values(user)         // Retrive the values
    const entires =  Object.entries(user);       //  Retrive the entries sub-array 

    const stringData   = JSON.stringify(user)    // Object to convert string
    const strToObject  = JSON.parse(stringData)  // string to convert object

    console.log("keys===>",keys)
    console.log("values===>",values)
    console.log("entires===>",entires)
    console.log("stringData===>",typeof stringData)
    console.log("strToObject===>",typeof strToObject)