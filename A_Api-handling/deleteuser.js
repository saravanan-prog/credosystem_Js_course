let endpointUrl = "https://fakestoreapi.com/users/1"

let option = {
    method :"delete"
}

fetch(endpointUrl,option)
    .then((response) => response.json())
    .then((data) => {
        console.log("delted data====>",data)
    })
    .catch((error) => console.log("error===>",error))


