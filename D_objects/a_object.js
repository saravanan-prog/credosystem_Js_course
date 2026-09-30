
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
    delete user.lastName              // delete value
    
    var fullname =  user.fullName()
 
    console.log("user====>",user)
    console.log("fullname====>",fullname)


    