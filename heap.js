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
            if(this.heap[index]>this.heap[parentIndex]){
                [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
                index=parentIndex
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