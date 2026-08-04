let fruits = ["apple","orange","grapes","pineapple","mango"]
fruits.splice(2,0,"kiwi","lichi")                              // ->         splice(starpos,length)








let newFruits = ["apple","orange","grapes","pineapple","mango"]
newFruits.splice(1,1 ,"kiwi","lichi")




console.log("newFruits=====>",newFruits)  // [ 'apple', 'kiwi', 'lichi', 'grapes', 'pineapple', 'mango' ]

