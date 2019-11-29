/**
 * 第一步
 * 实现简单 div>p>span
 * 实现代码
 * 第二步
 *  div#haha.class1.class2[name=dd type=text]{hhh};
 * 第三部
 *  div>p{div的下级}+span{p的平级}^div{从下级中出来了}
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
var str1 ='p>div#haha.class1.class2[name=dd type=text]{hhh}';
var str2 ='div>p{div的下级}+span{p的平级}^div{从下级中出来了}>p{我是}';
elementC(str2);
var strg = str1.split('>');
var queue = new Queue();
var ele = null; //节点
var classRrr = [];



// 处理'>','+','^'问题

function elementC(str) {
    var queue1 = new Queue();
    var arr = [];
    var type = null; // 当前押入的类型
    var a1 = str.split('>');
    var index = null;
    var isXindetiaoji = false;
    for (var a =0;a<a1.length;a++) {
        index = a;
        for (var i =0;i<a1[a].length;i++) {
            isXindetiaoji = false;
            if (a1[a].charAt(i)==='+') {
                typeSplit(queue1,type,index);
                type = '+';
            } else if (a1[a].charAt(i)==='^') {
                typeSplit(queue1,type,index);
                type = '^'
            } else {
                queue1.enqueue(a1[a].charAt(i));
            }
        }
        typeSplit(queue1,type,index)
    }
    console.log(a1)
}

var isTiaoji= null;
function typeSplit(queue,type,index) {
  if (type==='+') {
     console.log(stR1(queue))
  } else if(type==='^') {
      if (!isTiaoji) {
          isTiaoji = index;
      }
      var shangyiji = isTiaoji-1<0?0:isTiaoji-1;
      if (shangyiji<=0) {
          console.log('父级')
      } else {
          console.log('自己')
      }
      console.log(stR1(queue))
  } else {
      console.log(stR1(queue))
  }
}

function createElement(node) {
    return document.createElement(node);
}
function createDocumentFragment() {
    return document.createDocumentFragment();
}
function createNodeText(str) {
    return document.createTextNode(str);
}
function isElement(str) {
    ele = null;
    classRrr = []
  // 建立一个栈
  var type = null; // 判断是需要建立什么属性
  for (var a=0;a<str.length;a++) {
      // 开始算法判断
      switch (str.charAt(a)) {
          case '#':
              elmentortype(type)
              type='id';
              // console.log('要把前面的终于入的吐出来id')
              break;
          case '.':
              elmentortype(type)
              type='class';
              // console.log('新建类');
              break;
          case '[':
              elmentortype(type)
              type='[';
              // console.log('属性开始');
              break;
          case ']':
              elmentortype(type)
              type=']';
              // console.log('属性结束');
              break;
          case '{':
              elmentortype(type)
              type='text';
              // console.log('文字节点开始');
              break;
          case '}':
              elmentortype(type)
              type='}';
              // console.log('文字节点结束');
              break;
          default:
              queue.enqueue(str.charAt(a))
      }
  }
  elmentortype(type)
  return ele;
}
function elmentortype(type) {
    if (type==='id') {
        ele.setAttribute('id',stR())
    } else if(type===']'){
        // 属性
        var a = stR().split(' ');
        for (var i =0;i<a.length;i++) {
            var g = a[i].split('=');
            ele.setAttribute(g[0],g[i]);
        }
    }else if(type==='class'){
        classRrr.push(stR());
        ele.className = classRrr.join(' ');
    }else if(type===null) {
        ele = createElement(stR());
    } else if (type==='}'){
        ele.appendChild(createNodeText(stR()))
    }

}
function stR() {
    var f = '';
    while (!queue.isEmpty()){
        f+=queue.dequeue();
    }
    return f;
}
function stR1 (queue) {
    var f = '';
    while (!queue.isEmpty()){
        f+=queue.dequeue();
    }
    return f;
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
        this.linklist =linklist1.head();
        return this.ceateN();
    }
    // 开始建立node节点
    this.ceateN = function () {
        var curr_node = this.linklist;
        // 对传过来的字符串进行净化 建立新的dom节点并添加id及class 属性及文字节点
        // isElement(curr_node.data);
        var doc = createDocumentFragment();
        var parentEl = isElement(curr_node.data);
        doc.appendChild(parentEl);
        while (curr_node.next) {
            var D =  isElement(curr_node.next.data);
            parentEl.appendChild(D);
            parentEl = D;
            curr_node = curr_node.next
        }
        return doc.firstChild
    }

}
var emment = new Emment();
var list = emment.init(strg);
console.log(list)