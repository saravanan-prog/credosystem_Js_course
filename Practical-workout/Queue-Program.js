class Queue {

    fruitsArray = ["apple","Orange","grapes"]


    addItem(item){
        this.fruitsArray.unshift(item)
    }
    removeItem(){
        this.fruitsArray.shift()
    }
    dispalyItem(){
        console.log("fruitsArray====>",this.fruitsArray)
    }
}

const obj = new Queue()
obj.addItem("kiwi")
obj.addItem("lichi")
obj.addItem("Banana")

obj.dispalyItem()         // ["kiwi","lichi","Banana","apple","Orange","grapes",]

obj.removeItem()
obj.removeItem()
 
obj.dispalyItem()         // ["Banana","apple","Orange","grapes"]
