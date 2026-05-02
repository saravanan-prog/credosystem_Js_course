const textInput = document.getElementById('text-input')


const changeText = () => textInput.value = "Hello React JS"
const textTyping = (event) => console.log(event.target.value)


var firstnum = document.getElementById('first-value').value;
var secondnum = document.getElementById('second-value').value
const result = document.getElementById('result')

const firstValuechange = (event) => firstnum = event.target.value
const secondValueChange = (event) =>secondnum = event.target.value
const sum = () => {

    let sum = Number(firstnum) + Number(secondnum);
    result.innerText = sum
}