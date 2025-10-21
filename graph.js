class Graph {
    constructor(){
        this.adjList=new Map()
    }
    addVertex(vertex){
        if(!this.adjList.has(vertex))
            this.adjList.set(vertex,[])
    }
    addEdge(v1,v2){
        this.addVertex(v1)
        this.addVertex(v2)

        this.adjList.get(v1).push(v2)
        this.adjList.get(v2).push(v1)
    }
    printGraph(){
        for(let [vertex,edge] of this.adjList){
            console.log(vertex,edge)
        }
    }
    removeEdge(v,w){
        if(!this.adjList.has(v)||!this.adjList.has(w)) return null
        this.adjList.set(v,this.adjList.get(v).filter(x=>x!=w))
        this.adjList.set(w,this.adjList.get(w).filter(x=>x!=v))
    }
    removeVertex(v){
        if(!this.adjList.has(v)) return 
        for(let neighbour of this.adjList.get(v)){
            this.adjList.set(neighbour,this.adjList.get(v).filter(x=>x!=v))
        }
        this.adjList.delete(v)
    }
}
const graph = new Graph();
graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','d')
graph.addEdge('d','d')
graph.printGraph()
graph.removeEdge('b','d')
console.log('-----')
graph.printGraph()
console.log('-----')
graph.removeVertex('a')
graph.printGraph()