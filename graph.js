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
        if(!this.adjList.has(v) || !this.adjList.has(w)) return 
        this.adjList.set(v,this.adjList.get(v).filter(x=>x!=w))
        this.adjList.set(w,this.adjList.get(w).filter(x=>x!=v))
    }
    removeVertex(v){
        if(!this.adjList.has(v)) return
        for(let neighbours of this.adjList.get(v)){
            this.adjList.set(neighbours,this.adjList.get(neighbours).filter(x=>x!=v))
        }
        this.adjList.delete(v)
    }
    contains(v){
        return this.adjList.has(v)
    }
    dfs(start,visited=new Set()){
        if(visited.has(start)) return
        console.log(start)
        visited.add(start)
        for(let neighbours of this.adjList.get(start)){
            this.dfs(neighbours,visited)
        }
    }
}
const graph = new Graph();
graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','d')
graph.addEdge('d','d')
graph.printGraph()
// graph.removeEdge('a','c')
// console.log('-----')
// graph.printGraph()
// console.log('-----')
console.log(graph.contains('a'))
// graph.removeVertex('b')
// graph.printGraph()
// console.log(graph.contains('a'))
graph.dfs('a')