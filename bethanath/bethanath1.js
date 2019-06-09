
// 新建琏表对象
function linkList() {
    // 定义节点
    function Node(data) {
        this.data = data;
        this.next = null
    }
    var length = 0;
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
        length+=1;
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
}

// var linkstr = new linkList();
// linkstr.append('2');
// linkstr.append('4');
// linkstr.append('6');
// linkstr.append('7');
// linkstr.print()
