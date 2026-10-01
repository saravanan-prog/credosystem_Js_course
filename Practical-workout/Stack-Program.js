class Stack {

    fruitsArray = ["apple","Orange","grapes"]

    addItem(item){
        this.fruitsArray.push(item)
    }
    removeItem(){
        this.fruitsArray.shift()
    }
    dispalyItem(){
        console.log("fruitsArray====>",this.fruitsArray)
    }
}

const obj = new Stack()
obj.addItem("kiwi")
obj.addItem("lichi")
obj.addItem("Banana")

obj.dispalyItem()         // ["apple","Orange","grapes","kiwi","lichi","Banana"]

obj.removeItem()
obj.removeItem()
 
obj.dispalyItem()         // ["grapes","kiwi","lichi","Banana"]
