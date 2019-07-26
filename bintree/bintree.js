import Stack from './stack.js';

/**
 * 二叉树节点的定义
 * 这是完全二叉树有规律的
 *
 * @param node
 * @constructor
 */

function BinTreeNode(node) {
   this.data = node;
   this.leftChildNode = null;
   this.rightChildNode = null;
   this.parentNode = null;
}
// 定义二
function BinaryTree() {
    var root = null; //根节点
    // 不同的树，有不同的初始化方式 这个用广义表表示二叉树
    // console.log(str)
    // 'A(B(D,E(G,)),C(,F))#';
    this.init_tree = function (str) {
       var stack = new Stack();
       var k=0; //表示识别的是左子树还是右子树  1是左子树 2是右子树
       var new_node = null; // 新建的节点
       console.log(stack)
       for (var a=0;a<str.length;a++) {
          var item = str[a];
          if (item==='#') break;
          if (item==='(') {
             stack.push(new_node) // 把顶层元素压入栈内
             k=1; // 下一个元素是左孩子
          }else if(item===',') {
             k=2; //下一个元素为右孩子
          }else if (item===')') {
              // 如果是右括号 说明这个节点完成了需要把这个节点的父节点 从栈里pop出来
              stack.pop();
          }else {
            new_node= new BinTreeNode(item) //创建节点
            if (root===null) {
                root = new_node
            } else {
                var item_top = stack.top();
                if (k==1) {
                    item_top.leftChildNode = new_node;
                    new_node.parentNode = item_top;
                }else if(k==2) {
                    item_top.rightChildNode = new_node;
                    new_node.parentNode = item_top;
                }
            }
          }
       }
      console.log(root)
    }
}

export default BinaryTree
