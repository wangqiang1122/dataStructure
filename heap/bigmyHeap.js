// 必须设置堆的最大数量

function Maxheap(size) {
    var heap = new Array();  // 数组
    var cuur_size = 0;           // 当前堆的大小
    var Max_size = size||100000;// 堆的最大容量 默认100000
    this.init = function (arr) {
        cuur_size = arr.length; // 数组长度
        // 押入到数组堆中
        for (var a = 0; a<cuur_size;a++) {
            heap[a]= arr[a]
        }
        // console.log(heap);
        // 找到最有一个分支节点
        var cuur_pos = Math.floor((cuur_size-2)/2);
        console.log(cuur_pos)
        // for (var i = cuur_pos;i>=0;i--) {
        //     console.log(i);
        //     // 把父节点和最后一个叶节点传过去
        //     shit_Max(i,cuur_size-1)
        // }
        while (cuur_pos>=0) {
            shit_Max(cuur_pos,cuur_size-1);
            cuur_pos-=1
        }
        console.log(heap)
    }

    function shit_Max(start,m) {
        // heap = heap.filter((item)=>{
        //     if (item){
        //         return item
        //     }
        // })
       // 从start位置向下滑比较
       var parent_curr = start;
       // 父节点肯定有左孩子
       var max_child =  Math.floor((2*parent_curr)+1);
       while (max_child<=m) {
           if (heap[max_child]<heap[max_child+1]) {
               max_child = max_child+1
           }
           if (heap[parent_curr]>=heap[max_child]) {
               // console.log(parent_curr)
               return
           } else {
               var tmp = heap[parent_curr];
               heap[parent_curr] = heap[max_child];
               heap[max_child] = tmp;
               parent_curr = max_child;
               max_child = (2*parent_curr)+1;
           }
       }
       cuur_size = heap.length-1
    }
    // 插入
     this.inset = function(str) {
      if (cuur_size>Max_size) {
          return false;
      }
      heap[cuur_size] = str;
      shit_max_up(cuur_size);
      cuur_size+=1;
    };
    function shit_max_up(index) {
      // 新加入的节点只能放在最后 进行等待一次堆的重新排序
      var child_index = index;
      // 找到最后一个分支节点
      var max_child = Math.floor((child_index-1)/2);
      while (child_index>0) {
         if (heap[max_child]<heap[child_index]) {
             var tmp = heap[max_child];
             heap[max_child]=heap[child_index];
             heap[child_index] = tmp;
             child_index = max_child;
             max_child = Math.floor((child_index-1)/2);
         } else {
             return
         }
      }
    }
    this.remove_head = function () {
       if (cuur_size<0) {
           return null
       }
       var head = heap[0];
        heap[0] = head[cuur_size];
        // cuur_size-=1;
        // shit_max_up(cuur_size)
        cuur_size-=1;
        shit_Max(0,cuur_size);
        return head
    };
    this.print = function () {
        return heap;
    }
}
