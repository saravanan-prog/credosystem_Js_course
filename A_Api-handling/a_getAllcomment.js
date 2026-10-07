
/**
 *   Http = GET, POST, PUT, PATCH, DELETE
 */

async function getAllComments(){

    var response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    var responseData = await response.json()

    console.log("responseData===>",responseData)
}

getAllComments()





async function getSingleComment(){

    var response = await fetch("https://jsonplaceholder.typicode.com/posts/3")
    var responseData = await response.json()

    console.log("responseData===>",responseData)
}

getAllComments()