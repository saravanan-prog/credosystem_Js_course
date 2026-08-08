// LIFO => Last In First out

class Stack{

    constructor(){
        this.item = []
    }

    addItem(element){
        this.item.push(element)
    }
    viewItems(){
       console.log("Items====>",this.item)
    }
    removeItems(){
        return this.item.shift()
    }
}

const obj = new Stack()

obj.addItem(25)
obj.addItem(50)
obj.addItem(40)

obj.viewItems()

obj.removeItems()

obj.viewItems()