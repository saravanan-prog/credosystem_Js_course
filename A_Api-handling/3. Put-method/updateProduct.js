
async function addProductInServer(endPointUrl,option){
    try{
        const response     = await fetch(endPointUrl,option)
        const responseData = await response.json()
        if(responseData){
            console.log("responseData :::::",responseData)
        }
    }
    catch(error){
        console.log("Error::::",error?.message)
    }
    
}
const endpointURL = "https://fakestoreapi.com/products/3"

const productPayload = {
  "title": "Apple iphone", 
  "price": 500000
}

const option = {
    method : "PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body : JSON.stringify(productPayload)
}
addProductInServer(endpointURL,option)