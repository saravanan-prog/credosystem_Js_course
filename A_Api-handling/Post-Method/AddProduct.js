
async function addProductInServer(endPointUrl,option){
    try{
        const response = await fetch(endPointUrl,option)
        const responseData = await response.json()
        if(responseData){
            console.log("responseData :::::",responseData)
        }
    }
    catch(error){
        console.log("Error::::",error?.status)
    }
    
}

const product = {
    name : "Apple Laptop",
    price : 280,
    isAvailble : true
}

const option = {
    method : "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body : JSON.stringify(product)
}
const endpointURL = "https://fakestoreapi.com/products"
addProductInServer(endpointURL,option)