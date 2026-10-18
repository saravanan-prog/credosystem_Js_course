
/* Example 1  Search the element in Array Index Based. */
function find_the_element_IndexBased(element){
    const fruits = ["apple","orange","grapes","pineapple","lichi","kiwi"]
    const  searchResult = fruits.indexOf(element)
    console.log("SearchResult========>",searchResult)
}

//find_the_element_IndexBased("lichi")


/* Example 2 -  Search the element in Array Boolean Based. */

function search_the_value_availableORnot(element){

    const fruits = ["apple","orange","grapes","pineapple","lichi","kiwi"]
    const  searchResult = fruits.includes(element)
    console.log("SearchResult========>",searchResult)


}
search_the_value_availableORnot("apple")


