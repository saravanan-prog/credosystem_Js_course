const htmlContainer = document.getElementById('product-info')

function addProduct(){
    
    const productInfo  = {
       "productId" : 1,
       "name" : "Java course",
       "price" : 20000,
       "discount" : 5
    }

    sessionStorage.setItem("productInfo",JSON.stringify(productInfo))


}

function viewProduct(){

   
    let product = sessionStorage.getItem("productInfo")
    product = JSON.parse(product)

    let content = `
        <p>Product Name :  ${product?.name} </p>
        <p>Price :  ${product?.price} </p>
        <p>discount :  ${product?.discount} </p>
    
    `
    htmlContainer.innerHTML = content

}

function removeProduct(){
    
    sessionStorage.removeItem("productInfo")
    htmlContainer.innerHTML =``
}

