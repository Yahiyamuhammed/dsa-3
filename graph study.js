class Graph{
    constructor(){
        this.adjList=new Map()
    }
    addVertex(v){
        if(this.adjList.has(v)) return null
        this.adjList.set(v,[])
    }
    addEdge(v,w){
        this.addVertex(v)
        this.addVertex(w)

        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }
    print(){
        for(let [node,vartex] of this.adjList){
            console.log(node,vartex)
        }
    }
    removeEdge(v,w){
        if(!this.adjList.has(v) || !this.adjList.has(w)) return
        this.adjList.set(v,this.adjList.get(v).filter(x=>x!=w))
        this.adjList.set(w,this.adjList.get(w).filter(x=>x!=v))
    }
    removeVertex(v){
        if(!this.adjList.has(v)) return
        for(let neighbors of this.adjList.get(v)){
            this.adjList.set(neighbors,this.adjList.get(neighbors).filter(x=>x!=v))
        }
        this.adjList.delete(v)
    }
}
const graph=new Graph()
graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','d')
graph.addEdge('d','d')
graph.print()
graph.removeEdge('d','d')
graph.print()
graph.removeVertex('d')
graph.print()