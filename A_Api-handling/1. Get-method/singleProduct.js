async function getSingleProduct(endPointUrl,option){
    try{
        const response     = await fetch(endPointUrl,option)
        const responseData = await response.json()
        console.log("responseData===>",responseData)
    }
    catch(error){
        console.error("Error:::",error)
    }
}

const endPointUrl = "https://fakestoreapi.com/products/2"
const option = {
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
}

getSingleProduct(endPointUrl,option)