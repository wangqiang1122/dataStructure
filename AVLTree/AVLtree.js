/**
 * @param data
 * @constructor
 * AVL树和普通的二叉搜索树没什么区别 左子树比根结点小 右子树比根结点大
 * AVL树只是有比普通二叉树多个自平衡功能 搜索效率比普通二叉树高
 *
 *
 *  练习题 实现insert方法 (困难模式)
 *        实现删除方法(困难+)
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
    node.rightChild = tmp.leftChild||null;
    tmp.leftChild = node;
    return tmp;

}

/**
 * RD向右单选转
 * 右子树小于左子树  且平衡因子大于绝对值2 右子树高度-左子树高度 -2
 */
function rotationRD(node) {
    console.log(node)
  let tmp = node.leftChild;
  node.leftChild = tmp.rightChild||null;
  tmp.rightChild = node;
  return tmp;
}

/**
 * 先右后左的双旋转
 */
function rotationRLS(node) {
   node.rightChild = rotationRD(node.rightChild);
   return rotationLD(node);
}


/**
 * 向左后右双旋转
 */
function rotationLRS(node) {
   node.leftChild = rotationLD(node.leftChild);
   return rotationRD(node);
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
           // alert()
           node = rotationLD(node);
       } else {
           // 先右后左双旋转
           node = rotationRLS(node);
       }
    }
    // 左子树大于右子树 向右转
    if (heightNode(node.leftChild)-heightNode(node.rightChild)>1) {
        // 判断是向右单转还是双转
        if (heightNode(node.leftChild.leftChild) >= heightNode(node.leftChild.rightChild)) {
            node = rotationRD(node);
        } else {
            // 先左后右双旋转
            node = rotationLRS(node);
        }
    }
    return node
}

// 删除接口
function deletDate(node,data) {
    // 小于在左子树删除
    if (node.data>data) {
        node.leftChild = deletDate(node.leftChild,data)
        node = checkIsBalance(node);
    } else if (node.data<data) { // 大于在右子树删除
        node.rightChild = deletDate(node.rightChild,data)
        node = checkIsBalance(node);
    } else { // 相等 删除次节点有三种情况
        // 要删除的节点 既有左子树又有右子树 找到删除节点右子树的的中序排列的节点
        if (node.leftChild&&node.rightChild) {
           let tempNode = node.rightChild;
           // 到找右子树最小的节点
           while (tempNode.leftChild!=null) {
               tempNode = tempNode.leftChild;
           }
           // 找到了需要先复制给要删除的节点;
           node.data = tempNode.data;
           // 删除复制给要删除节点的
           node.rightChild = deletDate(node.rightChild,tempNode.data);
           node = checkIsBalance(node);
        } else if(node.rightChild==null) {  // 只有左子树
            node = node.leftChild;

        } else if (node.leftChild==null) {  // 只有右子树
            node = node.rightChild;
        } else {
            node = null;
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
            if (node.leftChild==null) {
                node.leftChild = Node;
                return node
            } else if (node.leftChild!==null) {
                node.leftChild = sert_node(node.leftChild,data);
                node = checkIsBalance(node);
            }
        } else if (node.data<data) { // 根结点小于新插入节点    右子树
            // node.rightChild = sert_node(node.rightChild,data);
            if (node.rightChild==null) {
                node.rightChild = Node;  // 只是连接当前节点的值
                return node
            } else if (node.rightChild!==null) {
                var  o = sert_node(node.rightChild, data);   // 执行这一个函数方法以已经添加完了
                // 递归后执行的代码 尤其是用树形结构的递归 用这种结构是最绕脑的
                // 节点之间的连接
                node.rightChild = o;
                console.log('当前节点值'+JSON.stringify(node.data))
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
    this.delete =function (node) {
        if (root==null) {
            return null
        } else {
            deletDate(root,node)
        }
    }
}
