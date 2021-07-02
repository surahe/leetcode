class DoubleLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Mappings of key->node.
    this.hashmap = {};
    // Use two dummy nodes so that we don't have to deal with the head/tail seperately.
    this.dummyHead = new DoubleLinkedListNode(null, null);
    this.dummyTail = new DoubleLinkedListNode(null, null);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  _isFull() {
    return Object.keys(this.hashmap).length === this.capacity;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    return node;
  }

  _addToHead(node) {
    const head = this.dummyHead.next;
    node.next = head;
    head.prev = node;
    node.prev = this.dummyHead;
    this.dummyHead.next = node;
  }

  get(key) {
    if (key in this.hashmap) {
      const node = this.hashmap[key];
      this._addToHead(this._removeNode(node));
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (key in this.hashmap) {
      // If key exists, update the corresponding node and move it to the head.
      const node = this.hashmap[key];
      node.value = value;
      this._addToHead(this._removeNode(node));
    } else {
      // If it's a new key.
      if (this._isFull()) {
        // If the cache is full, remove the tail node.
        const node = this.dummyTail.prev;
        delete this.hashmap[node.key];
        this._removeNode(node);
      }
      // Create a new node and add it to the head.
      const node = new DoubleLinkedListNode(key, value);
      this.hashmap[key] = node;
      this._addToHead(node);
    }
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/