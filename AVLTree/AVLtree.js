/**
 * @param data
 * @constructor
 * AVL树和普通的二叉搜索树没什么区别 左子树比根结点小 右子树比根结点大
 * AVL树只是有比普通二叉树多个自平衡功能 搜索效率比普通二叉树高
 */



function TreeNode(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    // this.parent = null;
    // this.ping = 0;
    // this.value = null;
}


/***
 * LD向左单选转
 * 右子树长于左子树 且平衡因子大于绝对值2 右子树高度-左子树高度 2
 */

function rotationLD(node) {
    let tmp = node.rightChild;
    var parent = node.parent;
    node.rightChild = tmp.leftChild;
    tmp.leftChild = node;
    return tmp;

}

/**
 * RD向右单选转
 * 右子树小于左子树  且平衡因子大于绝对值2 右子树高度-左子树高度 -2
 */
function rotationRD(node) {

}




/***
 * 计算平衡因子需要知道左子树的高度和右子树的高度
 */

var heightNode = function (node) {
  if (node===null) {
      return -1;
  } else {
     return Math.max(heightNode(node.leftChild),heightNode(node.rightChild))+1;
  }
};


/**
 * checkIsBalance
 * 平衡二叉树的方法核心
 *
 */
function checkIsBalance(node) {
    if (node===null) {
        return node
    }
    // 右子树大于左子树 是向左旋转
    if (heightNode(node.rightChild)-heightNode(node.leftChild)>1) {

       if (heightNode(node.rightChild.rightChild) >= heightNode(node.rightChild.leftChild)) {
           // 左单旋转
           alert()
           node = rotationLD(node)
       } else {
           alert()
       }
    }
    return node
}


/***
 *
 *  对外接口
 */

function Serach_link() {
    /***
     * AVL树插入时； 有4中情况需要做操作
     *
     */
    function sert_node(node,data) {
        let Node = new TreeNode(data);
        if(node===null) {
            Node.parent = null;
            node = Node;
            return node
        } else if (node.data>data) { // 根结点大于新插入节点    左子树
            node.leftChild = sert_node(node.leftChild,data);
            return node
            if (node.leftChild==null) {
                node.leftChild = Node;

            } else if (node.leftChild!==null) {

            }
        } else if (node.data<data) { // 根结点小于新插入节点    右子树
            // node.rightChild = sert_node(node.rightChild,data);
            if (node.rightChild==null) {
                node.rightChild = Node;  // 只是连接当前节点的值
                // console.log('node.rightChild==null的值'+JSON.stringify(Node.data));
                return node
            } else if (node.rightChild!==null) {
                var  o = sert_node(node.rightChild, data);   // 执行这一个函数方法以已经添加完了
                console.log('当前节点node='+JSON.stringify(node.data));
                console.log('返回值='+JSON.stringify(o.data));
                // 节点之间的连接
                node.rightChild = o;
                console.log(node);
                node = checkIsBalance(node);
            }
        }

        return node;

    }
    var root = null;
    this.insert = function (node) {
        if (root==null) {
          root = new TreeNode(node)
        } else {
            root = sert_node(root,node)
        }
    }
    this.print = function () {
        console.log(root);
    }
}
