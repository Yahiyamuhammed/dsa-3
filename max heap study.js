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
                [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
                index=parentIndex
            }else break
        }
    }
    remove(){
        if(this.heap.length==0)return null
        if(this.heap.length==1) return this.heap.pop()
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
    }
    heapifyDown(index){
        let length=this.heap.length
        let largest=index
        while(true){
            let left=2*index+1
            let right=2*index+2
            if(left<length && this.heap[left]>this.heap[largest]) largest=left
            if(right<length && this.heap[right]>this.heap[largest]) largest=right
            if(index!=largest){
                [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
                index=largest
            }
            else break
        }
    }
}
const minheap = new MaxHeap();
let arr = [3, 32, 2, 4, 5, 21, 4, 5, 6];
arr.forEach((num) => minheap.insert(num));
console.log(minheap.heap);
minheap.remove(5)
console.log('----');
console.log(minheap.heap);