
//optional chaining
const user = {} 

console.log("user====>",user.length);
console.log("user===>",user?.name?.firstname)


// Nullish

let str = null ?? "default"

console.log("str===>",str)
console.log("length====>",str.length);
console.log("uppercase====>",str.toLocaleUpperCase());