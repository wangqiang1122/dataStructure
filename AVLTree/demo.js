var Tree = function() {
    var Node = function(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    var root = null;    //根节点
    /*
    插入节点：
    1、树为空
    2、树不为空 -> 比较（小于 -> 往左走；大于 -> 往右走）
    */
    this.insert = function(value) {
        var newNode = new Node(value);
        if(root == null) { //空树
            root = newNode;
        }else{//树非空
            insertNode(root, newNode);
        }
    };

    //自平衡树插入新节点
    var insertNode = function(node,newNode) {
        if(node == null) {
            node = newNode;
            //向左走(向左子树拆入新节点，且节点的值小于其左子节点时，应该进行LL旋转。否则，进行LR旋转)
        }else if(newNode.value < node.value) {
            node.left = insertNode(node.left, newNode);
            if(node.left == null) {
                node.left = newNode;
                if(heightNode(node.left) - heightNode(node.right) > 1) {
                    if(newNode.value < node.left.value) {
                        node = rotationLL(node);
                    }else{
                        node = rotationLR(node);
                    }
                }
            }else if(node.left !== null){
                if(heightNode(node.left) - heightNode(node.right) > 1) {
                    if(newNode.value < node.left.value) {
                        node = rotationLL(node);
                    }else{
                        node = rotationLR(node);
                    }
                }
            }
            //向右走(向右子树拆入新节点，且节点的值大于其右子节点时，应该进行RR旋转。否则，进行RL旋转)
        }else if(newNode.value > node.value) {
            node.right = insertNode(node.right, newNode);
            if(node.right == null) {
                node.right = newNode;
                if(heightNode(node.right) - heightNode(node.left) > 1) {
                    if(newNode.value > node.right.value) {
                        node = rotationRR(node);
                    }else{
                        node = rotationRL(node);
                    }
                }
            }else if(node.right !== null) {
                if(heightNode(node.right) - heightNode(node.left) > 1) {
                    if(newNode.value > node.right.value) {
                        node = rotationRR(node);
                    }else{
                        node = rotationRL(node);
                    }
                }
            }
        }
        return node;
    };
    var heightNode = function(node) {
        if(node === null) {
            return -1;
        }else{
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
        }
    };
    //RR向左的单旋转
    var rotationRR = function(node) {
        var tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    };
    //LL向右的单旋转
    var rotationLL = function(node) {
        var tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    };
    //LR向右的双旋转
    var rotationLR = function(node) {
        node.left = rotationRR(node.left);
        return rotationLL(node);
    }
    //RL向左的双旋转
    var rotationRL = function(node) {
        node.right = rotationLL(node.right);
        return rotationRR(node);
    };

    //遍历节点
    this.traverse = function(callback) {
        traverse(root, callback);
    };
    var traverse = function(node, callback) {
        if(node == null) return;
        //（后续遍历）左右中；（中序遍历）左中右；（前序遍历）中左右
        traverse(node.left, callback);
        traverse(node.right, callback);
        callback(node.value);
    };

    //显示树
    this.getRoot = function() {
        return root;
    };
}
