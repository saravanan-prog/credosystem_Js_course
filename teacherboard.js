let numbers = [10,20,30,40,5,35,25,15]




const conditonResult = numbers.some((value,index,self)=>{
   return value > 45
} )

console.log("numbers====>",numbers)
console.log("conditonResult====>",conditonResult)