const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // добавляем элемент в очередь
 * queue.enqueue(3); // добавляем элемент в очередь
 * queue.dequeue(); // возвращает верхний элемент из очереди и удаляет его, возвращает 1
 * queue.getUnderlyingList() // возвращает { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null; // Указатель на начало очереди
    this.tail = null; // Указатель на конец очереди
  }

  /**
   * Возвращает связный список, представляющий очередь.
   * @returns {ListNode | null}
   */
  getUnderlyingList() {
    return this.head;
  }

  /**
   * Добавляет элемент в конец очереди.
   * @param {*} value - значение, которое нужно добавить
   */
  enqueue(value) {
    const newNode = new ListNode(value); // Создаём новый узел
    if (!this.tail) {
      // Если очередь пуста, head и tail указывают на новый узел
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Если очередь не пуста, добавляем новый узел в конец
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * Удаляет и возвращает элемент из начала очереди.
   * @returns {*}
   */
  dequeue() {
    if (!this.head) return undefined; 
    const value = this.head.value; 
    this.head = this.head.next; // Сдвигаем на следующий узел
    if (!this.head) {
      // Если очередь стала пустой, tail тоже должен быть null
      this.tail = null;
    }
    return value;
  }
};
