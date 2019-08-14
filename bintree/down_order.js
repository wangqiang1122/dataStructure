/**
 * 后序排列算法
 * 规律 左子树 右子树 根
 *
 * */
import Stack from './stack.js';

function NewNode(data,state) {
    this.data = data;
    this.state = state;
}

function down_order(node) {
    var stack = new Stack();
    var curr_node = node;
    var k=0; // 0 是左子树 1 是右子树
    console.log(node);
    while (true) {
        while (curr_node) {
            var i = new NewNode(curr_node,0);
            stack.push(i); //押入占中
            curr_node = curr_node.leftChildNode;
        }
        var item_node = stack.pop();
        if (item_node.data.rightChildNode && item_node.state===0) { // 说明这个节点没有左子树但是有右子树并且还没有被判断过
            item_node.state = 1;
            stack.push(item_node);
            curr_node = item_node.data.rightChildNode;
        } else {
            console.log(item_node.data.data)
        }
        if (!curr_node&&stack.isEmpty()) {
            break
        }

    }

}

function digui_down_order(node) {
   var stack = new Stack();
   var curr_node = node;
   next(curr_node)
   function next(node1) {
       var a = node1;
       if (a) {
           var item = new NewNode(a,0)
           stack.push(item);
           next(item.data.leftChildNode)
       }
       if(stack.isEmpty())return
       var pop_item = stack.pop();
       if (pop_item.data.rightChildNode&&pop_item.state===0) {
               stack.push(pop_item);
               pop_item.state=1;
               next(pop_item.data.rightChildNode);
       } else {
               console.log(pop_item.data.data);
       }

   }
}


export default digui_down_order