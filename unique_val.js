class OnlyUniqueValue {
    uniqueValArray = [];
    pushVal(element) {
    if(this.uniqueValArray.length < 1) {
        this.uniqueValArray.push(element)
        
    } else {
        
        const duplicat = this.uniqueValArray.find((el) => {
             return el === element
        });

        if(!duplicat)  {
            this.uniqueValArray.push(element)
            return this.uniqueValArray
        }

        return false

    }
    
}

printArr = () => console.log(this.uniqueValArray)


}

const list = new OnlyUniqueValue()

list.pushVal(4)
list.pushVal(5)
list.pushVal(4)
list.pushVal('hello')
list.pushVal('Sam')
list.pushVal('hello')


list.printArr()