class Node{
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
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char])
                return false
            node=node.chlidren[char]
        }
        return node.isEnd?'found':'found partial'
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
    longestPrefix(){
        let node=this.root
        let prefix=''
        while(true){
            const key=Object.keys(node.children)
            if(key.length!=1 || node.isEnd) break
            let char=key[0]
            prefix+=char
            node=node.children[char]
        }
        return prefix
    }
    autoComple(word){
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
        for(let char of node.children){
            this.collectWords(node.children[char],word+char,results)
        }
    }
}
const trie=new Trie()
trie.insert("cat");
trie.insert("cap");
trie.insert("car");
trie.insert("care");
trie.insert("cars");
trie.insert("bat");
trie.insert("ball");

// console.log(trie.search('cass'))
// console.log(trie.startWith('ba'))
console.log(trie.autoComple('ca'))
// console.log(trie.longestPrefix())