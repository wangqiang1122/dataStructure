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
  function shif_up(cuur_size) {
      if (cuur_size>Max_size) {
          return false
      }
    var end_child = cuur_size;
    var parent_index =  Math.floor((end_child-1)/2);// 找到最后一个节点的父节点 也就是最后一个分支节点
    while (parent_index >=0) {
      if (heap[parent_index].rate>heap[end_child].rate) {
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
  function shif_down(start,end) {
      // 净化数组
      heap = heap.filter((item)=>{
          if (item){
              return item
          }
      });
      // console.log(heap)
      var parent_index =  start;// 找到最后一个节点的父节点 也就是最后一个分支节点
      var end_child = (2*parent_index)+1;
      // console.log(parent_index,end_child);
      while (end_child<=end) {
          if (end_child<end&&(heap[end_child].rate>heap[end_child+1].rate)) { // 指针永远指向最小
              end_child = end_child+1;
          }
          if (heap[parent_index].rate>heap[end_child].rate) {
              var tmp = heap[parent_index];
              heap[parent_index] = heap[end_child];
              heap[end_child] = tmp;
              end_child = parent_index;
              parent_index = Math.floor((end-1)/2);
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