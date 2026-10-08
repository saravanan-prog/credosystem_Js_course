async function getAllComments(endPointUrl){

    var response = await fetch(endPointUrl)
    var responseData = await response.json()

    console.log("responseData===>",responseData)
}

const endPointUrl = "https://fakestoreapi.com/products/2"

getAllComments(endPointUrl)