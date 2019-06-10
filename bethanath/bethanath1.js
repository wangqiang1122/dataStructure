
// 新建琏表对象
function linkList() {
    // 定义节点
    function Node(data) {
        this.data = data;
        this.next = null
    }
    var length = 0
    var head = null;
    var tail = null;
    // 添加
    this.append = function (str) {
        var node = new Node(str)
        if (head==null) {
            head = node;
            tail = head;
        } else {
            tail.next = node;
            tail = node;
        }
        length++;
        return true
    }
    //打印出来
    this.print = function () {
        var cuur_node = head;
        var linkstr = '';
        while (cuur_node) {
            linkstr+=cuur_node.data.toString()+'->';
            cuur_node = cuur_node.next;
        }
        linkstr+='null'
        console.log(linkstr)
    }
    // 返回指定索引
    this.indexOf = function (str) {
        var cuur_node = head;
        var index = 0
        while (cuur_node) {
            if (cuur_node.data==str) {
                return index
            } else {
                index+=1;
                cuur_node = cuur_node.next
            }
        }
        return null
    }
    // 返回长度
    this.length = function () {
        return length
    }
    // 返回首节点
    this.head = function () {
        return head
    }
    // 尾节点
    this.tail = function () {
        return tail
    }
    // 返回指定索引位置元素
    this.get = function (index) {
        var cuur_node = head;
        var num =0 ;
        while (cuur_node) {
            if (num ===index) {
                return cuur_node
            }
            cuur_node = cuur_node.next;
            num++
        }
        return cuur_node
    }
    // 在指定位置插入一个元素
    this.insert = function (index,data) {
      if (index<0) {
          throw new Error('不能为负数')
      } else if (index>length) {
          throw new Error('不能超过链表长度')
      }
      var newNode = new Node(data);
      if (index==0) {
          newNode.next = head;
          head = newNode
      } else {
          var preNode = this.get(index-1);
          newNode.next = preNode.next
          preNode.next = newNode;
      }
      length+=1
    }
    // 删除指定元素
    this.remove = function (index) {
        if (index<0) {
            throw new Error('不能为负数')
        } else if (index>length) {
            throw new Error('不能超过链表长度')
        }
        var preNode,nextNode,delNode;
        nextNode = this.get(index+1);
        preNode = this.get(index-1);
        delNode = preNode.next;
        if (index==0) {
            head = null;
            head = nextNode;
        } else if (index===length) {
            preNode.next = null;
            tail = preNode;
        } else {
            preNode.next = nextNode;
        }
        length-=1
        return delNode
    }
    // 清空链表
    this.clear = function () {
        head = null;
    }
    // 删除首节点
    this.remove_head = function () {
        var delNode = this.head();
        if (!delNode) return null
        head = null;
        head = delNode.next;
        length-=1
        return delNode.data
    }
    // 删除尾节点
    this.remove_tail = function () {
        var delNode = this.tail()
        if (!delNode) return null
        var index = this.indexOf(this.tail().data)
        var preNode = this.get(index-1);
        preNode.next = null
        tail = preNode;
        length-=1
        return delNode.data
    }
    // 链表是否为空
    this.isEmpty = function () {
        if (head) {
          return false
        } else {
            return true
        }

    }
}

// var linkstr = new linkList();
// linkstr.append('2');
// linkstr.append('4');
// linkstr.append('6');
// linkstr.append('7');
// linkstr.print()
