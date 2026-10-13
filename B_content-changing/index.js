function changeTitle(){
    const title = document.querySelector("#title")
    title.innerText = `Welcome to D-MART`
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
    title.innerHTML = `Welcome to D-MART`
    title.classList.add( "text-color")
}

function removeTheDesign(){
    const title = document.querySelector("#title")
    title.classList.remove( "text-color")
}