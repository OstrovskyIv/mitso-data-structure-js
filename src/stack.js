const { NotImplementedError } = require("../extensions/index.js");

/**
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // добавляем элемент в стек
 * stack.peek(); // возвращает просмотр, но не удаляет его, возвращает 1
 * stack.pop(); // возвращает верхний элемент из стека и удаляет его, возвращает 1
 * stack.pop(); // неопределенный
 *
 */
module.exports = class Stack {
  constructor() {
    this.items = []; // Массив для хранения элементов стека
  }

  /**
   * Добавляет элемент в стек.
   * @param {*} element
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * Удаляет и возвращает верхний элемент стека.
   * @return {*}
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Возвращает верхний элемент стека без его удаления.
   * @return {*}
   */
  peek() {
    return this.items[this.items.length - 1];
  }
};
