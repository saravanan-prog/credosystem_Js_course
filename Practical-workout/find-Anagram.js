const text1 = "act"
const text2 =  null
var result
if(text1 && text2){
    result = text1.split('').sort().join('') === text2.split('').sort().join('') ? "Anagram" : "Not-anagram"
}
else{
    result = "Fill the text first"
}

console.log(result)