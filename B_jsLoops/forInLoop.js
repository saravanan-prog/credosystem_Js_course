let numbers = [10,20,30];


// key
for (let item in numbers) {
     console.log("key===>",item);              // 0, 1, 2    -> INK -> in key
}


for (let item in numbers) {
     console.log("value===>",numbers[item]);              // 10, 20, 30    
}