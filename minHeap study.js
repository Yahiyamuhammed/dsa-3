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
        while(true){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[index]<this.heap[parentIndex]){
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
        let length=this.heap.length
        let smallest=index
        while(true){
            let left=2*index+1
            let right=2*index+2
            if(left<length && this.heap[left]<this.heap[smallest]) smallest=left
            if(right<length && this.heap[right]<this.heap[smallest]) smallest=right

            if(index!=smallest){
                [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
                index=smallest
            }else break
        }
    }
}
const minheap = new MinHeap();
let arr = [3, 32, 2, 4, 5, 21, 4, 5, 6];
arr.forEach((num) => minheap.insert(num));
console.log(minheap.heap);
minheap.remove(5)
console.log('----');
console.log(minheap.heap);
// minheap.print()
