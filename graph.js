class Graph{
    constructor(){
        this.adjList=new Map()
    }
    addVertex(v){
        if(this.adjList.has(v)) return
        this.adjList.set(v,[])
    }
    addEdge(v,w){
        this.addVertex(v)
        this.addVertex(w)

        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }
    removeEdge(v,w){
        if(!this.adjList.has(v)  || !this.adjList.has(w)) return
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
    dfs(start,visited=new Set()){
        if(visited.has(start)) return
        visited.add(start)
        console.log(start)
        for(let neighbors of this.adjList.get(start)){
            this.dfs(neighbors,visited)
        }
    }
    bfs(start){
        let visited=new Set()
        let queue=[start]
        visited.add(start)

        while(queue.length>0){
            let vertex=queue.shift()
            console.log(vertex)
            for(let neighbors of this.adjList.get(vertex)){
                if(!visited.has(neighbors)){
                    visited.add(neighbors)
                    queue.push(neighbors)
                }
            }
        }
    }
    print(){
        for(let [node,vertex] of this.adjList){
            console.log(node,vertex)
        }
    }
    contains(v){
        return this.adjList.has(v)
    }
    shortestPath(v){
        let visited=new Set()
        let queue=[[v,0]]
        let distance=new Map()
        distance.set(v,0)
        visited.add(v)
        while(queue.length>0){
            let [vertex,dist]=queue.shift()
            for(let neighbors of this.adjList.get(vertex)){
                if(!visited.has(neighbors)){
                    visited.add(neighbors)
                    distance.set(neighbors,dist+1)
                    queue.push([neighbors,dist+1])
                }
            }
        }
        return distance
    }
}
const graph=new Graph()
graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','d')
graph.addEdge('d','d')
graph.print()
// graph.removeEdge('a','c')
console.log('-----')
graph.print()
// graph.removeVertex('a')
// console.log(graph.contains('a'))
graph.dfs('a')
console.log('-----')
graph.bfs('a')
console.log(graph.shortestPath('a'))