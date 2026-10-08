
async function getAllComments(endPointUrl,option){

    var response = await fetch(endPointUrl,option)
    var responseData = await response.json()

    console.log("responseData===>",responseData)
}

const option = {
    method :"DELETE",
    headers:{
        "Content-Type" : "application/json"
    },
}


const endPointUrl = "https://fakestoreapi.com/products/3"
getAllComments(endPointUrl,option)
