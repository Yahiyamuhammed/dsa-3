class MaxHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]<this.heap[index]){
                [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
                index=parentIndex
            }else break
        }
    }
    remove(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()
        
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
    }
    heapifyDown(index){
        let largest=index
        let length=this.heap.length
        while(true){
            let left=(2*index)+1
            let right=(2*index)+2

            if(left<length && this.heap[left]>this.heap[largest]) largest=left
            if(right<length && this.heap[right]>this.heap[largest]) largest=right

            if(largest!==index){
                [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
                index=largest
            }else break
        }
    }
    print(){
        console.log(this.heap)
    }
}
const heap=new MaxHeap()
heap.insert(21)
heap.insert(51)
heap.insert(11)
heap.insert(61)
heap.insert(41)
heap.insert(12)
heap.print()
heap.remove()
heap.print()