/* Example 1 :  Pop method remove the element Back side. */
function remove_an_Element_Backside(){
    
    var fruits = ["apple","orange","grapes","pineapple","lichi","kiwi"]

    fruits.pop()   // ["apple","orange","grapes","pineapple","lichi"]
    fruits.pop()   // ["apple","orange","grapes","pineapple"]
    fruits.pop()   // ["apple","orange","grapes"]

    console.log("pop Method Result ====>", fruits)
}
 // remove_an_Element_Backside()



/* Example 2 : shift method() Remove the element front side. */
function remove_an_element_fontside(){

    var vegetable = ["onion","bringal","tomato","cabage","carrot"]
    vegetable.shift()       // ["bringal","tomato","cabage","carrot"]
    vegetable.shift()       // ["tomato","cabage","carrot"]
    vegetable.shift()       // ["cabage","carrot"]

    console.log("Shfit method result  =====>",vegetable)
}

remove_an_element_fontside()
