
async function getAllComments(endPointUrl,option){
    try{
        const response = await fetch(endPointUrl,option)
        const responseData = await response.json()
        console.log("responseData===>",responseData)
    }
    catch(error){
        console.error("Api Error")
    }
}

const endPointUrl = "https://fakestoreapi.com/products/3"

const option = {
    method :"DELETE",
    headers:{
        "Content-Type" : "application/json"
    },
}


getAllComments(endPointUrl,option)
