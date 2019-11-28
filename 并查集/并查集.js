/**
 * 查找有几个朋友圈的问题
 *
 * friends这个数组里有几个朋友圈
 * 定义是：约定朋友的朋友也是朋友
 * 有相同的数字的就是一个朋友圈
 * */

var friends = [
    [0,7],
    [1,6],
    [4,8],
    [8,2],
    [9,0],
    [3,5],
    [1,2],
];

/***
 * 类的定义
 */

function UFSets() {
    var parent = [];
    this.friends = friends;
    /**
     * 初始化方法
     * 进行初始化的时候，数组里的每一个元素都初始化为-1，这里有3个感念非常重要
     * 1、每个元素都是一个单独的集合，与其它集合互不相交
     * 2、对于刚刚初始化结束的并查集，每个元素是一个单独的集合，它的索引就是这个集合的集合名
     * 3、每个元素的值，就是其父节点所在的索引，由于刚刚初始化，每个元素的值都是-1，-1这个索引在
     * 数组中是不存在的，这恰好表明每个元素都没有父节点
     * (个人理解)
     * 每个数组索引相对应的值都是一个集合(或者是一个树形结构)都是独立与其他索引的值不相交，
     * 这个数组相当于是有很多互不相交树形结构的森林
     * 这个数组的索引就是这个集合(或叫树形结构)的名字
     * 这个数组的索引所对应的值，就是这个其父节点所在的引用，如果为负数表明这个元素没有父节
     * 点，他就是跟节点
     * 初始化为-1 表明每个元素都没有父节点
     * */
    this.init = function (size) {
        parent = new Array(size);
        for (var i=0;i<size;i++) {
            parent[i] = -1;
        }
        this.hebing();
    }
    /***
     * find方法是搜索x所在的集合，并返回这个集合的名字
     * 例子
     * 对于刚刚初始化的并查集,你随便搜索一个数，比如3，那么返回的结果就是3，而在初始化在明确指出
     * ，这个3就是的集合名
     * */
    this.find = function (item) {
      while (parent[item]>=0) {
          item = parent[item];
      }
      return item;
    }
    /*****
     *  合并两个不相交的集合,将root2和并到root1中，root1和root2是两个集合名
     *  必须要强调root1和root2是不相交的，这一点union方法自身没有做判断，需要自己应用
     *  的时候去判断
     *  仅仅是这三个放发一个并查集就写好了
     */
    this.union = function (root1,root2) {
        parent[root1] = parent[root1]+parent[root2];
        parent[root2] = root1;
    }


    // 进行合并操作
    this.hebing = function () {
        //  [1,2],
        for (var a =0;a<7;a++) {
            var parentI =a;
            var [a1,a2] = this.friends[parentI];
            var z1 = this.find(a1);
            var z2 = this.find(a2);
            // console.log(z1)
            // console.log(parent[z1]);
            // this.union(a1,a2);
            if (parent[z1]<0||parent[z2]<0) {
              this.union(z1,z2);
            } else {
                if (parent[z1]!==parent[z2]) {
                    this.union(z1,z2);
                }
            }
        }
    }
    this.print = function () {
        // console.log(parent[this.find(2)]+parent[this.find(1)]);
        // console.log(parent[this.find(2)]);
        // console.log(parent[this.find(1)])
        console.log(parent)
    }
    this.isfriend = function (root1,root2) {
      var a1 = this.find(root1);
      var a2 = this.find(root2);
      return a1===a2;
    }
}


var a = new UFSets();
a.init(10);
console.log(a.isfriend(1,8))


a.print()