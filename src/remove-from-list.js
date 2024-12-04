const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');  
/**
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 */
module.exports = function removeKFromList(l, k) {
  // фиктивный узел 
  let dummy = new ListNode(0);
  dummy.next = l;
  
  // указатель = текущий узел
  let current = dummy;

  // начало с фиктивного узла
  while (current.next !== null) {
    if (current.next.value === k) {
      // если нашли узел с значением k, пропускаем его
      current.next = current.next.next;
    } else {
      // наче переходим к следующему узлу
      current = current.next;
    }
  }

  // Возвращаем список, начиная с первого реального узла
  return dummy.next;
}