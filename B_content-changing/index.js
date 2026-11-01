function changeTitle(){
    const title = document.querySelector("#title")
    title.innerText = `Welcome to Grace super market
    `
}

function removeTitle(){
    const title = document.querySelector("#title")
    title.innerText = ``
}

function replaceOriginalTitle(){
    const title = document.querySelector("#title")
    title.innerText = `Welcome to DMART`
}



function changeTitlewithStyle(){

    const title = document.querySelector("#title")
    title.innerHTML = `
        <div style='color:red;'>
            <h3> Welcome to Grace super market </h3>
        </div>
    `
}




function changeTitlewithStyleviaClass(){

    const title = document.querySelector("#title")
    title.classList.add( "text-color")
    title.classList.add("fs-64")
    title.classList.add("bg-color")
}




function removeTheDesign(){ 
    
    console.log("Remove function triggred")
    var title = document.querySelector("#title")
    title.classList.remove( "text-color")
    title.classList.remove("bg-color")
}