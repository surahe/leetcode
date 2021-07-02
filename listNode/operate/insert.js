//节点
function Node(val) {
  this.val = val;   //当前节点的元素
  this.next = null; //下一个节点链接
}
//链表类
function LList() {
  this.head = new Node('head');     //头节点
  this.find = find;                   //查找节点
  this.insert = insert;               //插入节点
  this.remove = remove;               //删除节点
  // this.findPrev = findPrev;           //查找前一个节点
  this.display = display;             //显示链表
}

function find(item) {
  var currNode = this.head
  while (currNode.val != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(val, item) {
  var node = this.find(item)
  var newNode = new Node(val)

  var next = node.next
  node.next = newNode
  newNode.next = next
}

function remove(val) {
  var node = this.find(val)
  var next = node.next
  if (next) {
    node.val = next.val
    node.next = next.next
  } else {
    node = null
  }
}

// 显示链表
function display() {
  var currNode = this.head;
  while (currNode.next !== null) {
    currNode.next.val
    currNode = currNode.next;
  }
}

var fruits = new LList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');
console.log(fruits.head, {deep: 4})
fruits.remove('Banana')
console.log(fruits.head)
