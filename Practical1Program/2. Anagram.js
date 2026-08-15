var string1 = "hello"
var string2 = "world"


if(string1 ==null && string2 == null)
    console.log("Both string is empy so it is not anagram")
else
    string1 = string1.split("").sort().join("")    
    string2 = string2.split("").sort().join("")    
    let anagramCheck = string1 === string2 ? "Anagram" : "Not-Anagram"

    console.log("anagramCheck=====>",anagramCheck)