/**
 * 搜索二叉树的特点左子树小于root小于右子树
 * */


var TreeNode = function (data,value) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
    this.value = value;
}
function Searchtree() {
    var root = null;

    /**
     * 插入
     * 插入时，从跟节点开始，被插入元素的关键码如果比根节点关键码小，则
     * 进入左子树执行插入操作，如果左子树不存在，则被插入元素称为左子树
     * 反之，进入右子树中执行插入操作，如果右子树不存在，则被插入元素成为
     * 右孩子，如果被插入元素的关键码已经存在，则返回false
     * */

    function insert_data(node,data,val) {
        if (root===null) {
            root = new TreeNode(data,val)
            return true
        }
        if (data<node.data) {
           if (node.leftChild) {
               return insert_data(node.leftChild,data)
           } else {
               var new_data = new TreeNode(data,val);
               node.leftChild = new_data;
               new_data.parent = node;
           }
            return true;
        } else if(data>node.data) {
            if (node.rightChild) {
                return insert_data(node.rightChild,data)
            } else {
                var new_data1 = new TreeNode(data,val);
                node.rightChild = new_data1;
                new_data1.parent = node;
            }
            return true;
        } else {
            return false;
        }
    }
    /**
     * 搜索
     *  和插入操作差不多，仍然是从树的跟节点开始，如果被搜索元素的关键码比跟节点关键码小，
     *  则进入左子树中进行搜索，若左子树不存在，返回null 反之，如果被搜索元素的关键码比跟节点大
     *  则进入右子树中搜索，若右子树不存在，返回null，如果跟节点的关键码和被搜索元素相同，返回跟节点
     *
     * */

    function search_data(node,data) {
        if (node === null) {
            return null
        }
        if (data === node.data) {
            return node;
        } else if(data>node.data) {
            return search_data(node.rightChild,data)
        } else if (data<node.data) {
            return search_data(node.leftChild,data)
        } else {
            return null;
        }
    }

    /**
     * 删除
     * 删除一个节点时，要考虑到必须将被删除节点的子孙节点链接到树上，同时保证二叉搜索树的性质。
     * 根据被删除节点的左右孩子，可以总结一下几种情况：
     * 1 被删除节点左右孩子都不存在
     * 2 被删除节点没有右孩子
     * 3 被删除节点没有左孩子
     * 4 被删除节点左右孩子都存在
     * 对于第一种情况，最为简单，只需要让其父节点指向他的指针指向null即可
     * 对于第二种情况，用左孩子代替他的位置
     * 对于第三种情况，用有孩子代替他的位置
     * 对于第四种情况，稍稍有些复杂，首先，去被删除节点的右子树找到中序遍历下的的第一个节点，假设
     * 节点数据的data为x，将被删除节点的data替换成X,而后，在被删除节点的右子树中执行删除x的的操作
     *
     * */

    function remove_data(node,data) {
       if(node==null) {
           return false
       }
       if (data<node.data){
           return remove_data(node.leftChild,data)
       } else if (data>node.data){
           return  remove_data(node.rightChild,data)
       } else {
           if (node.leftChildNode&&node.rightChild) {
               var curr_node = node.rightChild;
               while (curr_node.leftChild) {
                   curr_node = curr_node.leftChild;
               }
               node.data = curr_node.data;
               return remove_data(node.rightChild,curr_node.data);
           } else {
               // 左右孩子缺了一个
               var parent = node.parent;
               // 如果没有左孩子
               if (!parent.leftChildNode) {
                   link_parent(parent,node,node.rightChild,'right')
               } else {
               // 如果没有右孩子 或 左右孩子都没有的情况
                   link_parent(parent,node,node.leftChild,'left')
               }
           }
       }

    }

    function link_parent(parent,node,next_node,dir) {
        if (parent==null) {
            root = next_node;
            root.parent = null;
        } else {
            if (parent.rightChild&&dir === 'right') {
                parent.rightChild = next_node;
                next_node.parent = parent;
            } else if(parent.leftChild&&dir === 'left'){
                parent.leftChild = next_node;
                next_node.parent = parent;
            } else {
                parent.leftChild = null;
            }
        }

    }
    // 最小值
    function min(node) {
        if (node==null) {
            return null
        }
        var curr_node = node;
        while (curr_node.leftChild) {
            curr_node = curr_node.leftChild
        }
        return curr_node;
    }
    // 最大值
    function max(node) {
        if (node==null) {
            return null
        }
        var curr_node = node;
        while (curr_node.rightChild) {
            curr_node = curr_node.rightChild
        }
        return curr_node;
    }
    this.insert = function (data,val) {
        return insert_data(root,data,val)
    }
    this.search_data = function (data) {
        return search_data(root,data)
    }
    this.remove = function (data) {
        return remove_data(root,data)
    };
    this.print = function () {
        return root;
    }
    this.min = function () {
        return min(root);
    }
    this.max = function () {
        return max(root);
    }
    // 树的高度
    this.height = function () {
       return height(root);
    };
    function height(node) {
       return node==null?0:(Math.max.call(height(node.leftChild),height(node.rightChild))+1);
    }

}