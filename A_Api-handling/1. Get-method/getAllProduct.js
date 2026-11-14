
/**
 *   Http = GET, POST, PUT, PATCH, DELETE
 */


const url = `https://fakestoreapi.com/products`

const option = {
    method : "GET",
    headers:{
        "Content-Type":"application/json"
    }
}

const getProducts = async (url,option) => {
    const response =  await fetch(url,option)
    const responseData = await response.json()

    console.log("responseData ============>",responseData)
}

getProducts(url,option)


