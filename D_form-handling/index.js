




function formValidate(){

    event.preventDefault();
    const userName = document.getElementById("username").value;
    const errorMessage = document.getElementsByClassName('username_erromsg')[0]

    console.log("userName",userName)
    if(userName.trim() === null || userName.trim() === ''){
        
        errorMessage.innerHTML = `
            <span style=color:red> Please enter your mobile number  </span>
        `
    }

    else if(userName.length < 3){

        console.log("Entered secnd if")
        
        errorMessage.innerHTML = `
            <span style=color:red> Username must be minimum 3 letter required  </span>
        `
    }

       else if(userName.length > 5){

       
        
        errorMessage.innerHTML = `
            <span style=color:red> Username not exclude 6 char  </span>
        `
    }






    else{
        
        errorMessage.innerHTML =``

        let formdata = {
            username : userName
        }

        console.log("formdata",formdata)
    }
    

    
    


   
}

