var TreeNode = function (data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
}
function Searchtree() {
    var root = null;

    function insert_data(node,data) {
        if (root===null) {
            root = new TreeNode(data)
            return true
        }
        if (data<node.data) {
           if (node.leftChild) {
               return insert_data(node.leftChild,data)
           } else {
               var new_data = new TreeNode(data);
               node.leftChild = new_data;
               new_data.parent = node;
           }
            return true;
        } else if(data>node.data) {
            if (node.rightChild) {
                return insert_data(node.rightChild,data)
            } else {
                var new_data1 = new TreeNode(data);
                node.rightChild = new_data1;
                new_data1.parent = node;
            }
            return true;
        } else {
            return false;
        }
    }
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
    this.insert = function (data) {
        return insert_data(root,data)
    }
    this.search_data = function (data) {
        return search_data(root,data)
    }
}