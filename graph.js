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
}
const graph = new Graph();
graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','d')
graph.addEdge('d','d')
graph.printGraph()