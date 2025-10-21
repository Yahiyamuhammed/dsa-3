class MinHeap{
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
            if(this.heap[parentIndex]>this.heap[index]){
                [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
                index=parentIndex
            }else break
        }
    }
    remove(){
        if(this.heap.length == 0) return null
        if(this.heap.length == 1) return this.heap.pop()
        
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
    }
    heapifyDown(index){
        let length=this.heap.length
        while(true){
            let smallest=index
            let left=2*index+1
            let right=2*index+2
            if(length>left && this.heap[left]<this.heap[smallest]) smallest=left
            if(length>right && this.heap[right]<this.heap[smallest]) smallest=right

            if(smallest!=index){
                [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
                index=smallest
            }else break
        }
    }
    print(){
        console.log(this.heap)
    }
}
const heap=new MinHeap()
heap.insert(21)
heap.insert(51)
heap.insert(11)
heap.insert(61)
heap.insert(41)
heap.insert(12)
heap.print()
heap.remove()
heap.print()