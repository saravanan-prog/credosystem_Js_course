
/**
 *   Http = GET, POST, PUT, PATCH, DELETE
 */

async function getAllComments(endPointUrl,option){

    var response = await fetch(endPointUrl,option)
    var responseData = await response.json()

    console.log("responseData===>",responseData)
}

const option = {
    method :"GET",
    headers:{
        "Content-Type" : "application/json"
    },
}


const endPointUrl = "https://fakestoreapi.com/products"
getAllComments(endPointUrl,option)





