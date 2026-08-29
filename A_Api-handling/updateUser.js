let endipointUrl = "https://fakestoreapi.com/users/2"

let payload =  {
    username: 'saravanan', 
    email: 'saravanan@example.com' 
};

let option = {
    method : "put",
    headers:{
        "accept":"application/json",
        "Content-Type": 'application/json'
    },
    body:JSON.stringify(payload)
}


fetch(endipointUrl,option)
    .then( response => response.json())
    .then( data => console.log("after update response ====>",data))
    .catch(error => console.log("error====>",error))