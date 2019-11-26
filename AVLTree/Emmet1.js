/**
 * 实现简单 div>p>span
 * 实现代码
 *
 * */

// 新建节点
// function Node(data) {
//     this.data = data;
//     this.next = null;
// }

// 新建链表
function linkList() {
    // 新建节点
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    var head = null;
    var tail = null;
    this.append = function (data) {
        var o = new Node(data);
        if (head==null) {
            head = o;
            tail = o;
        } else {
            tail.next = o;
            tail = o;
        }
        return head;
    }
    this.head = function () {
        return head;
    }
}
var str = 'div>p>span';
var strg = str.split('>');
console.log(strg);

function createElement(node) {
    return document.createElement(node);
}
// Emment生成器
function Emment() {
    // 建立节点列表
    var linklist1 = new linkList();
    this.linklist  = null;
    // 初始化生成链表
    this.init = function (nodeArr) {
        for(var a =0;a<nodeArr.length;a++) {
            linklist1.append(nodeArr[a])
        }
        return this.linklist =linklist1.head();
    }
    // 开始建立node节点
    this.ceateN = function () {
        var curr_node = this.linklist;
        while (curr_node.next) {
            var a = createElement()
        }
    }

}
var emment = new Emment();
var list = emment.init(strg);
console.log(list)