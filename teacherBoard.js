
async function getProducts(){
    const url = "https://fakestoreapi.com/products"
    const option = {
        method : "GET"
    }
    const response     = await fetch(url,option)
    const responseData = await response.json()
    const element = document.querySelector('.products')
    var html = ''
    for(let item of responseData){
         html  += `
            <div>
               <div> <img src =${item.image} height=100 width=100 /> </div>
               <div> ${item.title} </div>
            </div>
        `
        
    }
    element.innerHTML = html


}
getProducts()