 let str = "Hello World";

    // 1 2 3 4 5 6 7 8 9 10 11          -> End 
    // H e l l o   W o r l  d           -> string
    // 0 1 2 3 4 5 6 7 8 9 10           -> start

let slicedStr    =  str.slice(0,5)            // (startpos,endpos)   hello
let substring    =  str.substring(6,11)       //  (startpos,endpos) 
let substr       =  str.substr(6,4)           // (startpos,length)


console.log("slicedStr===>",slicedStr) 
console.log("substring====>",substring)
console.log("substr=====>",substr)