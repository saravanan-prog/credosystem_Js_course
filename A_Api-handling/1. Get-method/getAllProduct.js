
/**
 *   Http = GET, POST, PUT, PATCH, DELETE
 */

async function getAllProducts(endPointUrl,option){
    try{
        var response = await fetch(endPointUrl,option)
        var responseData = await response.json()
        console.log("responseData===>",responseData)
    }
    catch(error){
        console.error("Error::::",error)
    }
}


const endPointUrl = "https://fakestoreapi.com/products"
const option = {
    method :"GET",
    headers:{
        "Content-Type" : "application/json"
    }
}
getAllProducts(endPointUrl,option)





