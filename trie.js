class Node {
    constructor(){
        this.children={}
        this.isEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char])
                node.children[char]=new Node()
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char])
                return false
            node=node.children[char]
        }
        if(!node.isEnd)
            return 'partial found'
        else
            return 'found'
    }
    startWith(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char])
                return false
            node=node.children[char]
        }
        return true
    }
    autoComplete(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) return []
            node=node.children[char]
        }
        let results=[]
        this.collectWords(node,word,results)
        return results
    }
    collectWords(node,word,results){
        if(node.isEnd) results.push(word)
        for(let char in node.children){
            this.collectWords(node.children[char],word+char,results)
        }
    }
}
const trie=new Trie()
trie.insert('cat')
trie.insert('cap')
trie.insert("can");
trie.insert("cape");
trie.insert("car");
trie.insert("dog");

console.log(trie.search('ca'))
console.log(trie.startWith('ca'))
console.log(trie.autoComplete('ca'))