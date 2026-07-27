



function handleSubmit() {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //validation

    
    const url = `https://fakestoreapi.com/users`
    const payload  = {
       
        "username": username,
        "password": password
    }

    const option = {
        method : "POST",
        contentType : {
            headers:"application/json"
        },
        body : JSON.stringify(payload)
    }


    fetch(url,option)
        .then( response => response.json())
        .then(data => console.log("data===>",data))
        .catch(error => console.error(err))


}








