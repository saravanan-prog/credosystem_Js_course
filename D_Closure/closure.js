function outer() {
    
    var count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

console.log("counter ====>",counter)

counter(); // 1
counter(); // 2
counter(); // 3


