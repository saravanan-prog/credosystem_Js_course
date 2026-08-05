let text1 = "act"
let text2 = "cat"
 let result
if(text1 && text2){
    result = text1.split('').sort().join('') === text2.split('').sort().join('') ? "Anagram" : "Not-anagram"
}
else{
    result = "Fill the text first"
}

console.log(result)