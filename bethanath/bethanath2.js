
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
    // while的反转  迭代反转

    /**
     * while 循环反转
     *  相当于把指向箭头方向反转 1>2>3>4;
     *  第一步 1<2>3>4
     *  第两步 1<2<3>4
     *  第三步 1<2<3<4
     * */
    this.reverse_iter = function (head) {
       if (!head) {
           return null
       }
       var pre_node = null; //  存放前一个节点
       var cuur_node = head; // 当前节点
       while (cuur_node) {
           var next_node = cuur_node.next; // 找到当前节点的下一个节点

           cuur_node.next = pre_node;      // 当前节点的下一个节点 是上一个节点

           pre_node = cuur_node; //当前节点变成上一个节点  当前节点是上一节点

           cuur_node = next_node; // 下一个节点是 curr_node
           console.log(cuur_node)
       }
       return pre_node
    }

    /**
     * 递归翻转思路：利用递归特性
     *     递归是函数入栈 里面的参数也是可以保留的的特性对
     *     属性进行操作
     *     new_head是一个反向的链表
     *     主要操作的是item 对他的item.next.next进行重新重新指向 item.next归为null
     *     递归函数返回的值永远是上一次的值 因为栈的特性 后进先出
     *     1>2>3>4
     *     1>2>3<4
     *     1>2<3<4
     *     1<2<3<4
     */

    // 递归反转
    this.reverse_digui = function (item) {
        // console.log(item)
      if(!item){
          return null
      }
      if (item.next===null) {
          console.log(item);
          return item
      }
      var new_head = this.reverse_digui(item.next); //返回的是上一次的值  1<2<3<4<t < a
      console.log(new_head)
      // console.log(item)
      item.next.next = item;
      item.next = null
      return  new_head
    }
    // 从尾到头打印链表
    this.reverse = function (head) {
        var arr = [];

        function next(head) {
            if (head.next!=null) {
                next(head.next)
            }
            arr.push(head)
        }
        next(head)
        return arr
    }
}

// var linkstr = new linkList();
// linkstr.append('2');
// linkstr.append('4');
// linkstr.append('6');
// linkstr.append('7');
// linkstr.print()
