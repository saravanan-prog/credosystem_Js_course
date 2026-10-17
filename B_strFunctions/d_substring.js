 var str = "Hello world";

    // 1 2 3 4 5 6 7 8 9 10 11          -> End position
    // H e l l o   W o r l  d           -> string
    // 0 1 2 3 4 5 6 7 8 9 10           -> start position

var slicedStr    =  str.slice(6,11)            // (startpos,endpos + 1 ) ->   world
var substring    =  str.substring(6,11)        // (startpos,endpos + 1)  ->   world 
var substr       =  str.substr(6,5)            //  (startpos,count)       ->     world

console.log("slicedStr===>",slicedStr) 

console.log("substring===>",substring) 

console.log("substr===>",substr) 
