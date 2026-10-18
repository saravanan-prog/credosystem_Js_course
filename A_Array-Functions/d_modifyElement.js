/*  Example 1 
 *  splice(currentpos,length) - remove or modify middle of the position 
 *
 */

function remove_an_element_middleof_position(){

    const fruits = ["apple","orange","grapes","pineapple","mango"]
    console.log("Before Splice Fruis==========>",fruits)
    fruits.splice(2,2)                                              
    console.log("After Splice Fruis==========>",fruits)
}
//remove_an_element_middleof_position()




/** Example -2  
 *  Modify the value middle of postion using splice(current_pos,length,"new-value")
 */

function modify_middleof_position(){
    
    const fruits = ["apple","orange","grapes","pineapple","mango"]
    console.log("Before Splice Fruis==========>",fruits)
    fruits.splice(1,1,"kiwi","lichi")           
    console.log("After Splice Fruis==========>",fruits)
}

modify_middleof_position()