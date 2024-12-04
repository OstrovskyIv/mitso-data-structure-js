const { NotImplementedError } = require("../extensions/index.js");

// Узел 
class Node {
  constructor(data) {
    this.data = data; // значение узла
    this.left = null; 
    this.right = null; 
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null; // начало - пустой корень
  }

  
  root() {
    return this.rootNode;
  }

  // новый узел
  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode; // если дерево пустое, новый узел = корень
      return;
    }

    let current = this.rootNode;

    while (true) {
      if (data < current.data) {
        
        if (!current.left) {
          current.left = newNode; 
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        
        if (!current.right) {
          current.right = newNode; 
          return;
        }
        current = current.right;
      } else {
        
        return;
      }
    }
  }

  // Проверка наличия узла
  has(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) return true;
      current = data < current.data ? current.left : current.right;
    }

    return false;
  }

  // Поиск узла
  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  // Удаление узла
  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // У узла нет потомков
      if (!node.left && !node.right) {
        return null;
      }
      // У узла один потомок
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // У узла два потомка
      let minRight = this._findMin(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  // мин узел
  min() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  // макс узел
  max() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
};
