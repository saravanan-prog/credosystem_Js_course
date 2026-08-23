
function formValidate(e){
  e.preventDefault()

  const username      = document.querySelector("#username").value
  const usernameError = document.querySelector("#username_error")


  console.log("username ===>",username)

  if(username == ""){
    console.log("entered")
    usernameError.innerText = "Please Enter user name"
  }
  else{
    usernameError.innerText = ""
  }


}

