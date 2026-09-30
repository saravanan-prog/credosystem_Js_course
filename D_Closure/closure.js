// Functional Clousre 


function counterProgram() {
    
    var count = 0;

    function displayCount() {
        count++;                               
        console.log("count====>",count);
    }

    return displayCount;
}

const innerFunction = counterProgram();

innerFunction(); // 1
innerFunction(); // 2
innerFunction(); // 3


