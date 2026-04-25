
    const user = {
        "name": "Saravanan",
        "lastName" : "Durai",
        "age": 25,
        "isLoggedIn": true,
        fullName(){
            return this.name + " " + this.lastName
        }
         
    };

    user.city = "Bangalore";           // add-value
    user.age = 28                      // update-value
    delete user.isLoggedIn             // delete value
    
    let name =  user.fullName()
 
    console.log("name====>",name)

    