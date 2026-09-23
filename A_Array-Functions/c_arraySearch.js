
function searchThevalueinArray(){

    let fruits = ["apple","orange","grapes","pineapple","lichi","kiwi"]

    let elementIndex        = fruits.indexOf("grapes")   /* returns to current Index value */
    let lastElementIndex    = fruits.lastIndexOf("pineapple")
    let elementSearchResult = fruits.includes("grapes")  /* returns to True or false */

    return elementIndex

}

let result = searchThevalueinArray()
console.log("result===>",result)
