import Stack from './stack.js';
/**
* 非递归中序遍历法
 * 需要先处理跟节点的 左子树
 * 处理顺需是 左子树 根 右子树
* */

function middle_order(node) {
    console.log(node);
    var arr = [];
    // 新建一个栈
    var stack = new Stack();
    var curr_node = node;
    //
    while(true) {
       while(curr_node) {
           stack.push(curr_node);
           curr_node = curr_node.leftChildNode;
       }
       var item = stack.pop();
       arr.push(item.data);
       curr_node = item.rightChildNode;
       if (!curr_node&&stack.isEmpty()) {
           break;
       }
    }
   return arr;
}

function digui_middle_order(node) {
    var stack = new Stack();
    var arr = [];
    var num =0;
    return next(node)
    function next(node1) {
        if (!node1) {
            return
        }
        var curr_node = node1;
        if (curr_node) {
            stack.push(curr_node);
            next(curr_node.leftChildNode)
        }
        // console.log(stack.arr())
        var item_node = stack.pop();
        console.log(item_node);
        arr.push(item_node.data);
        curr_node = item_node.rightChildNode;
        next(curr_node)
        return arr
    }
}
export default digui_middle_order;