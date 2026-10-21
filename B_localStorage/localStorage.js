const htmlContainer = document.getElementById('data-info')

function register(){
    
    const userInformation  = {
        "username": "saravanan@gmail.com",
        "email": "saravanan@gmail.com",
        "password": "Test@123"
    }

    localStorage.setItem("userInformation",JSON.stringify(userInformation))
    htmlContainer.innerHTML =`Your Record is added local storage`

}

function viewData(){

   
    var userData = localStorage.getItem("userInformation")

    var userData = JSON.parse(userData)

    const content = `
        <p>Name :  ${userData?.username} </p>
        <p>Email :  ${userData?.email} </p>
        <p>Password :  ${userData?.password} </p>
    
    `
    htmlContainer.innerHTML = content

}

function removeUser(){
    
    localStorage.removeItem("userInformation")
    htmlContainer.innerHTML =`Your Record has been deleted`
}

