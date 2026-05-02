
const url = `https://fakestoreapi.com/users`



function handleSubmit() {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //validation

    const payload  = {
        "id": 0,
        "username": username,
        "email": username,
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




function fetchUsers() {

  fetch('https://fakestoreapi.com/users/11')
    .then(response => response.json())
    .then(data => console.log("data====>",data));
}




