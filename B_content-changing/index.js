const selector = document.querySelectorAll("#firstId")


for(let item of selector){
   item.innerText = "Hello Welcome to Javascript program"
}


const content = document.getElementsByClassName('content')
console.log(content)
content[0].innerHTML = "<span style='color:green'>Hello Sarath </span>"



const username = document.getElementById('username')
username.value = "saravanan@gmail.com";