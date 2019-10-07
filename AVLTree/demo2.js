/**
 * AVL树节点的构造函数
 * @constructor
 */
function AVLTreeNode(key) {
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
}

/**
 * AVL树的构造函数。如果没有传有效的keyName，使用data进行比较；否则使用data[keyName]进行比较
 *
 * @param {string} [keyName] - 可选参数。关键码在data中的字段名
 * @constructor
 */
function AVLTree(keyName) {


    this.root = null;

    //这是我们计算当前节点的高度的方法,递归计算
    let getHeight = function (node) {
        // 如果没有那就为0
        if(node === null) {
            return 0;
        } else {
            return Math.max(getHeight(node.leftChild),getHeight(node.rightChild)) + 1;
        }
    };
    //向左的单旋转
    let rotateLL = function (node) {
        let tmp = node.rightChild;
        node.rightChild = tmp.leftChild;
        tmp.leftChild = node;
        return tmp;
    };

    //向右的单旋转
    let rotateRR = function (node) {

        let tmp = node.leftChild;
        node.leftChild = tmp.rightChild;
        tmp.rightChild = node;
        return tmp;
    };

    //先左后右双旋转
    let rotateLR = function (node) {
        node.leftChild = rotateLL(node.leftChild);
        return rotateRR(node);
    };

    //先右后左双旋转
    let rotateRL = function (node) {
        node.rightChild = rotateRR(node.rightChild);
        return rotateLL(node);
    };
    //方法保证 整颗树平衡
    function checkIsBalance(node) {
        if (node == null) {
            return node;
        }
        // 左子树高度比右子树高度大   父节点平衡因子为-2
        if (getHeight(node.leftChild) - getHeight(node.rightChild) > 1) {
            if (getHeight(node.leftChild.leftChild) >= getHeight(node.leftChild.rightChild)) {
                // 如果左子树的左子树高度大于等于左子树的右子树高度  左子节点为-1和0
                // 直接进行右单旋
                node = rotateRR(node);
            } else {
                //如果左子节点为1，需要先左后右双旋
                node = rotateLR(node);
            }
            // 右子树高度比左子树高度大1以上  父节点平衡因子为2
        } else if (getHeight(node.rightChild) - getHeight(node.leftChild) > 1) {
            if (getHeight(node.rightChild.rightChild) >= getHeight(node.rightChild.leftChild)) {
                // 如果右子树的右子树高度大于等于右子树的左子树高度
                // 直接进行左单旋
                node = rotateLL(node);
            } else {
                // 否则需要右左双旋
                node = rotateRL(node);
            }
        }
        return node;
    }
    //插入方法：
    let insertNode = function(node, newNode){

        if (node == null){
            node = newNode;
            return node;
        } else if (newNode.key < node.key){
            // 在左子树里插入 同搜索二叉树一致
            if (node.leftChild === null){
                node.leftChild = newNode;
                return node;
            } else {
                node.leftChild = insertNode(node.leftChild, newNode);
                //更新整棵树
                node = checkIsBalance(node);
            }
        } else if (newNode.key > node.key){
            //右子树里插入
            if (node.rightChild === null){
                node.rightChild = newNode;
                return node;
            } else {
                node.rightChild = insertNode(node.rightChild, newNode);
                node = checkIsBalance(node);
            }
        }
        return node;
    };


    this.insert = function (data) {
        let newNode = new AVLTreeNode(data);
        this.root = insertNode(this.root, newNode);
    };

    this.delete = function (data) {
        this.root = deleteData(this.root, data);
    };
    //删除制定节点
    function deleteData(node, data) {
        if( node === null){
            return null;
        }
        //如果小于就在左子树中删除
        if(data < node.key){
            node.leftChild =  deleteData(node.leftChild, data);
            node = checkIsBalance(node);

            return node
        }else if(data > node.key){
            node.rightChild = deleteData(node.rightChild, data);
            node = checkIsBalance(node);

            return node
        }else{
            //删除的data等于node.key

            //如果此节点有两个子节点
            if(!!node.leftChild && !!node.rightChild){
                let tempNode = node.rightChild;

                while ( null !== tempNode.leftChild){
                    //找到右子树中最小的节点
                    tempNode = tempNode.leftChild;
                }

                //右子树中最小的节点赋值给当前节点
                node.key =  tempNode.key ;
                //删除右子树中最小值的节点
                node.rightChild = deleteData(node.rightChild, tempNode.key);
                node = checkIsBalance(node);

                return node;

            }else {
                //只有一个或者是叶节点
                //叶节点
                if( null === node.leftChild && null === node.rightChild){
                    node = null;
                    return node;
                }
                //只有右
                if( null === node.leftChild){
                    node = node.rightChild;
                    return node;
                }else if( null === node.rightChild){
                    //只有左
                    node = node.leftChild;
                    return node;
                }
            }

        }
    }
    this.print = function () {
        console.log(this.root);
        debugger
    }

}
