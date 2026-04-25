    
    const user = {
        "name": "Saravanan",
        "lastName" : "Durai",
        "age": 25,
        "isLoggedIn": true,
        fullName(){
            return this.name + " " + this.lastName
        }
         
    };
    
    
    let keys = Object.keys(user)
    let values = Object.values(user)
    let entires = Object.entries(user);

    console.log("keys===>",keys)
    console.log("values===>",values)
     console.log("entires===>",entires)