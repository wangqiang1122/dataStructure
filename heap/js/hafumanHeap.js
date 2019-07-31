function Min_heap(size) {
  if (!size) throw new Error('必须写入最大空间')
  var heap = new Array();
  var Max_size = size;
  var cuur_size = 0; // 当前堆的大小
  this.inset = function (str) {
    heap[cuur_size] = str;
    shif_up(cuur_size);
    cuur_size+=1
  };
  this.init = function (arr) {
      for (var a = 0; a<Max_size;a++) {
          heap[a]= arr[a]
      }
      cuur_size = arr.length;
      // 找到尾叶节点 也就是最后一个元素(Max_size-1)
      var cuur_pos = Math.floor((cuur_size-2)/2); // 找到最后一个分支节点
      while (cuur_pos>=0) {
          shif_down(cuur_pos,cuur_size-1) // 把最后一个父节点和最后一个叶节点传过去   局部自上而下 向下调整
          cuur_pos-=1                     // 调整分支节点
      }
  };
  // 是向上移动
  function shif_up(cuur_size) {
      if (cuur_size>Max_size) {
          return false
      }
    var end_child = cuur_size;
    var parent_index =  Math.floor((end_child-1)/2);// 找到最后一个节点的父节点 也就是最后一个分支节点
    while (parent_index >=0) {
      if (heap[parent_index].rate.rate>heap[end_child].rate.rate) {
          var tmp = heap[parent_index];
          heap[parent_index] = heap[end_child];
          heap[end_child] = tmp;
          end_child = parent_index;
          parent_index = Math.floor((end_child-1)/2)
      } else {
          return
      }
    }
  }
  // 是一次性加载进来的 不是一个一个加载进来的 是向下移动
  function shif_down(start,end) {
      // 净化数组
      heap = heap.filter((item)=>{
          if (item){
              return item
          }
      });
      // console.log(heap)
      var parent_index =  start;// 找到最后一个节点的父节点 也就是最后一个分支节点
      var end_child = (2*parent_index)+1; // 上一个分支节点的左子树
      // console.log(parent_index,end_child);
      while (end_child<=end) {
          if (end_child<end&&(heap[end_child].rate.rate>heap[end_child+1].rate.rate)) { // 指针永远指向最小
              end_child = end_child+1;
          }
          if (heap[parent_index].rate.rate>heap[end_child].rate.rate) {
              var tmp = heap[parent_index];
              heap[parent_index] = heap[end_child];
              heap[end_child] = tmp;
              parent_index = end_child;
              end_child = Math.floor((2*parent_index)+1);
          } else {
              return
          }
      }
  }
  this.remove_head = function () {
    if (cuur_size<0) {
        return null
    }
    var tmp = heap[0];
    heap[0] = heap[cuur_size];
    cuur_size-=1;
    shif_down(0,cuur_size-1)
     return tmp
  }
  this.print= function () {
      return heap
  }
  this.length = function () {
      return cuur_size
  }
}