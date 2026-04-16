 let str = "Hello World";

    // 1 2 3 4 5 6 7 8 9 10 11          -> End 
    // H e l l o   W o r l  d           -> string
    // 0 1 2 3 4 5 6 7 8 9 10           -> start

let slicedStr = str.slice(6,11)  
let substr    =  str.substring(6,11)


console.log("substr===>",substr) 