const htmlContainer = document.getElementById('data-info')

function register(){
    
    const userInformation  = {
       
        "username": "saravanan@gmail.com",
        "email": "saravanan@gmail.com",
        "password": "Test@123"
    }

    localStorage.setItem("user",JSON.stringify(userInformation))


}

function viewData(){

   
    let userData = localStorage.getItem("user")

    userData = JSON.parse(userData)

    let content = `
        <p>Name :  ${userData?.username} </p>
        <p>Email :  ${userData?.email} </p>
        <p>Password :  ${userData?.password} </p>
    
    `
    htmlContainer.innerHTML = content

}

function removeUser(){
    
    localStorage.removeItem("user")
    htmlContainer.innerHTML =``
}

