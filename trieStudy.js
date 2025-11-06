class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new Node();
      node = node.children[char];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEnd ? "found" : "found partial";
  }
  startWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
  autoComplete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    let results = [];
    this.collectWords(node, word, results);
    return results;
  }
  collectWords(node, word, result) {
    if (node.isEnd) result.push(word);
    for (let char in node.children) {
      this.collectWords(node.children[char], word + char, result);
    }
  }
  longestPrefex() {
    let node = this.root;
    let prefix = "";
    while (true) {
      let keys = Object.keys(node.children);
      if (keys.length != 1 || node.isEnd) break;
      let char = keys[0];
      prefix += char;
      node = node.children[char];
    }
    return prefix;
  }
}
const trie = new Trie();
trie.insert("cat");
trie.insert("cap");
trie.insert("car");
console.log(trie.search("cat"));
console.log(trie.startWith("ca"));
console.log(trie.autoComplete("ca"));
console.log(trie.longestPrefex());
