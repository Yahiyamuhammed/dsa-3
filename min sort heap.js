function sort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[i],arr[0]]=[arr[0],arr[i]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let smallest=i
    let left=2*i+1
    let right=2*i+2

    if(left<n && arr[left]>arr[smallest]) smallest=left
    if(right<n && arr[right]>arr[smallest]) smallest=right

    if(smallest!=i){
        [arr[i],arr[smallest]]=[arr[smallest],arr[i]]
        heapify(arr,n,smallest)
    }
}
let arr=[32,32,54,43,54,55,32,32]
console.log(sort(arr))