
const url = `https://fakestoreapi.com/users`

const userInformation  = {
    "id":0,
    "username": "saravanan@gmail.com",
    "email": "saravanan@gmail.com",
    "password": "Test@123"
}

const option = {
    method : "POST",
    contentType : {
        headers:"application/json"
    },
    body : JSON.stringify(userInformation)
}

fetch(url,option)
.then( response => response.json())
.then(data => console.log("data===>",data))
.catch(error => console.error(err))