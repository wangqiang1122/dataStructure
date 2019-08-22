/***
 * 前序遍历规则
 * 根 左子树 右子树
 *
 */
import Stack from './stack.js';


 function up_order(data) {
   var stack = new Stack();
   var curr_node = data;
   while (true) {
       while (curr_node)  {
           console.log(curr_node);
           stack.push(curr_node);
           curr_node = curr_node.leftChildNode;
       }
       curr_node =stack.pop().rightChildNode;
       if (!curr_node&&stack.isEmpty()) {
           break
       }
   }
   // console.log(node);
}
export default up_order