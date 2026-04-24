const htmlContainer= document.getElementById('data-info')

function register(){
    const userInformation  = {
            "id":0,
            "username": "saravanan@gmail.com",
            "email": "saravanan@gmail.com",
            "password": "Test@123"
    }

    localStorage.setItem("userInfo",JSON.stringify(userInformation))

    let productInfo =[ {
        id :1,
        prdoductName : "T-shirt"
    }]
     localStorage.setItem("productInfo",JSON.stringify(productInfo))
}

function viewData(){

   
    let userData = localStorage.getItem("userInfo")
    let productData = JSON.parse(localStorage.getItem('productInfo'))

    htmlContainer.innerText = userData

}

function removeUser(){
    localStorage.removeItem("userInfo")
    htmlContainer.innerHTML =``
}

