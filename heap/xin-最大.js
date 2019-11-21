/**
 * @constructor
 * 堆的就是自上而下进行
 */

function MaxHeap() {
    this.cuur_size = 0; // 最大堆
    this.heap = [];
    this.len = 0;
    this.endIndex = 0;
}
MaxHeap.prototype.init = function (arr) {
    this.len = arr.length;
    for (var a = 0;a<arr.length;a++ ){
        this.heap[a] = arr[a];
    }
    this.endIndex = this.heap.length -1;
    // 新建堆完成 初始化最大堆
    var endI = Math.floor((this.endIndex-1)/2);  // 找到最有一个分支节点
    // 需要从最后一个分支节点向上进行
    while (endI>=0) {
        console.log(endI)
        this.shit_Max(endI, this.endIndex);
        endI--
    }
};
MaxHeap.prototype.shit_Max  = function (parent,child) {
      var parentIndex  = parent; // 最后一个分枝节点位置
      var childIndex  = child; // 最后一个节点位置

      var max_child = (2*parentIndex)+1; //找到当前的位置的值 及分支节点的左孩子
      while (max_child<=childIndex) {
         if (max_child<childIndex&&this.heap[max_child]<this.heap[(2*parentIndex)+2]) {
             max_child = (2*parentIndex)+2;
         }
         if (this.heap[parentIndex]>=this.heap[max_child]) {
             break
         } else {
            var tmp = this.heap[parentIndex];      // 把父节点的值保存起来
            this.heap[parentIndex] = this.heap[max_child];  // 把子节点的值赋给父节点
            this.heap[max_child] = tmp; // 把父节点的值赋给子节点
            parentIndex = max_child;   // 要向下继续滑动
            max_child =  (2*parentIndex)+1 // 父节点向下滑动完的 最新左孩子的当前位置
         }
      }
};
MaxHeap.prototype.insert = function(data) {
   this.heap.push(data);
   this.endIndex = this.heap.length -1;
    /**
     *  插入之后重新排序方法一
     */
    // var endI = Math.floor((this.endIndex-1)/2);  // 找到最有一个分支节点
    // // 需要从最后一个分支节点向上进行
    // while (endI>=0) {
    //     this.shit_Max(endI, this.endIndex);
    //     endI--
    // }
    /**
     *  插入之后重新排序方法二
     */
    this.shit_max_up();
};
MaxHeap.prototype.shit_max_up = function() {
    // 插入是自下而上
    // 只是对比第一个分之节点和最后一个叶节点就
    var child_index = this.endIndex;
    // 找到最后一个分支节点
    var max_child = Math.floor((child_index-1)/2);
    while (max_child>0) {
        if (this.heap[max_child]<this.heap[child_index]) {
            var tmp = this.heap[child_index];
            this.heap[child_index] = this.heap[max_child];
            this.heap[max_child] = tmp;
            child_index = max_child;   // 把分支节点的位置赋给最后一个节点的变量
            max_child =  Math.floor((child_index-1)/2);// 利用child_index找到这个节点相对应的父节点 向上滑动
        } else {
            break;
        }
    }
}

MaxHeap.prototype.remvoe_head = function() {
  if (this.heap.length<0) return null;
  var Max = this.heap[0];
  this.heap[0] = this.heap[this.endIndex];
  this.heap.pop();
  this.endIndex-=1;
  this.shit_Max(0,this.endIndex)
  return Max
};
MaxHeap.prototype.print = function () {
    console.log(this.heap);
}