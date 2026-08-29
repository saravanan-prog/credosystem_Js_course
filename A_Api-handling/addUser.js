let endipointUrl = "https://fakestoreapi.com/users/"

let payload =  {
    username: 'saravanan', 
    email: 'saravanan@example.com' 
};

let option = {
    method : "post",
    headers:{
        "accept":"application/json",
        "Content-Type": 'application/json'
    },
    body:JSON.stringify(payload)
}


fetch(endipointUrl,option)
    .then( response => response.json())
    .then( data => console.log("data====>",data))
    .catch(error => console.log("error====>",error))