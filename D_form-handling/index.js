
function formValidate(event){
    event.preventDefault();

    const userName = document.getElementById("username").value;
    const usernameError = document.getElementById('username_error')
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    //Password selector



    if(userName.trim() === null || userName.trim() === ''){
        
        usernameError.innerHTML = `
            <span style=color:red> Please enter your  username  </span>
        `
    }

    else if(userName.length < 3){

        usernameError.innerHTML = `
            <span style=color:red> Username must be minimum 3 letter required  </span>
        `
    }

    else if(!pattern.test(userName)){
        usernameError.innerHTML = `
            <span style=color:red> username is must be email format  </span>
        `
    }



    else{
        
        usernameError.innerHTML =``

        let formdata = {
            username : userName
        }

        console.log("formdata",formdata)
    }
    

    
    


   
}

