



function handleSubmit() {
    event.preventDefault();

    var username = document.getElementById('username').value ; 
    var password = document.getElementById('password').value;



    //validation

    
    const url = `https://fakestoreapi.com/users`
    const payload  = {
        "id": 0,
        "username": username,
        "email":username,
        "password": password
    }


    

    const option = {
        method : "POST",
        contentType : {
            headers:"application/json"
        },
        body : JSON.stringify(payload)
    }

    console.log("url====>",url,"option===>",option)


    fetch(url,option)
        .then( response => response.json())
        .then(data => console.log("data===>",data))
        .catch(error => console.error(err))


}








