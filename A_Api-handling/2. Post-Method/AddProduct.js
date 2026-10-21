
async function addProductInServer(endPointUrl,option){
    try{
        const response = await fetch(endPointUrl,option)
        const responseData = await response.json()
        if(responseData){
            console.log("responseData :::::",responseData)
        }
    }
    catch(error){
        console.log("Error::::",error)
    }
    
}

const endpointURL = "https://fakestoreapi.com/products"

const productPayload = {
    title : "Apple Laptop",
    price : 280,
}

const option = {
    method : "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body : JSON.stringify(productPayload)
}
addProductInServer(endpointURL,option)