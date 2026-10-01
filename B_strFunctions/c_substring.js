 var str = "Hello world";

    
    // H e l l o   W o r l  d           -> string
    // 0 1 2 3 4 5 6 7 8 9 10           -> start

var slicedStr    =  str.slice(3,6)            // (startpos,endpos + 1 ) ->  lo 
var substring    =  str.substring(3,6)       //  (startpos,endpos + 1)  ->   lo 
var substr       =  str.substr(3,3)           //  (startpos,count)     ->   lo 

console.log("slicedStr===>",slicedStr) 
console.log("substring====>",substring)
console.log("substr=====>",substr)