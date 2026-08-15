let numbers = [10,20,30,40,5,35,25,15]

let value = numbers.every((value,index,arr) => {
      return value > 25
})

console.log("old Array=====>",numbers)
console.log("value=====>",value)