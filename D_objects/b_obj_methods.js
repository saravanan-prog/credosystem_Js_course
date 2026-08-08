    
    const user = {
        "name": "Saravanan",
        "lastName" : "Durai",
        "age": 25,
        "isLoggedIn": true,
        fullName(){
            return this.name + " " + this.lastName
        }
         
    };
    
    
    let keys    =  Object.keys(user)           // Retrive the keys
    let values  =  Object.values(user)         // Retrive the values
    let entires =  Object.entries(user);       //  Retrive the entries sub-array

    let stringData   = JSON.stringify(user)    // Object to convert string
    let strToObject  = JSON.parse(stringData)  // string to convert object

    console.log("keys===>",keys)
    console.log("values===>",values)
    console.log("entires===>",entires)
    console.log("stringData===>",typeof stringData)
    console.log("strToObject===>",typeof strToObject)