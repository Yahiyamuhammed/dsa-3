class TrieNode{
    constructor(){
        this.children={}
        this.isEnd=null
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(node.children[char]){
                node=node.children[char]
            }
            else return false
        }
        if(node.isEnd) return true
        else{
            return 'partial word is found'
        }
    }
    startWith(word){
        let node=this.root
        for(let char of word){
            if(node.children[char]){
                node=node.children[char]
            }
            else
                return false
        }
        return true
    }
}
const trie=new Trie()
trie.insert('cat')
trie.insert('car')
trie.insert('bag')
console.log(trie.search('bags'))
console.log(trie.search('car'))
console.log(trie.startWith('cars'))
