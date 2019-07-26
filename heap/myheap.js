function Minheap(size) {
    var heap = new Array();  // 数组
    var cuur_size = 0;           // 当前堆的大小
    var Max_size = size||1000;// 堆的最大容量
    // 传入一个数组调整数据为最小堆
    this.init = function (arr) {
        // Max_size = arr.length; // 长度
        cuur_size = arr.length;  // 长度
        heap = new Array(Max_size)
        // 押入到数组堆中
        for (var a = 0; a<Max_size;a++) {
           heap[a]= arr[a]
        }
        // 找到尾叶节点 也就是最后一个元素(Max_size-1)
        var cuur_pos = Math.floor((Max_size-2)/2); // 找到最后一个分支节点
        while (cuur_pos>=0) {
            shif_down(cuur_pos,cuur_size-1) // 把最后一个父节点和最后一个叶节点传过去   局部自上而下 向下调整
            cuur_pos-=1                     // 调整分支节点
        }
    }

    /**
      *  最小堆的初始化
      * @param start
     * @param m
     */
   function shif_down(start,m) { // 只是单纯的对比父节点和左右子女节点 不靠全局只考虑局部
        // 从start位置下滑调整 是最后一个分支节点
        heap = heap.filter((item)=>{
            if (item){
                return item
            }
        })
        var parent_curr = start;
        var min_child_index = (2*parent_curr)+1; // 该最后一个父节点肯定有左孩子，根据完全二叉树的定义父节点肯定有左孩子
        // 最小堆的定义父节点的值要小于等于左右孩子的值
        while(min_child_index<=m) {  // 判断min_child_index不能大于尾索引
            if (min_child_index<m&&heap[min_child_index]>heap[min_child_index+1]) {
                min_child_index = min_child_index+1;  // min_child_index 指针永远指向的是最小的索引
            }
            if (heap[parent_curr]<=heap[min_child_index]) {
                return
            } else {
                // 父节点和自节点进行交换
                var tmp = heap[parent_curr]; // 把父节点单独保存出来
                heap[parent_curr] = heap[min_child_index]; // 把子孩子的赋值给父节点
                heap[min_child_index] = tmp;    // 把父节点的值赋值给子女节点
                parent_curr = min_child_index;  // 需要节点向下移动
                min_child_index = (2*parent_curr)+1 // 找到新的父节点的子女节点
            }
        }
        // console.log(heap)
   }
   // 插入一个元素，只能在尾部push
   this.insert = function (str) {
       if (cuur_size>Max_size) {
           return false
       }
       heap[cuur_size]=str;
      //找到新添加节点的父节点
      var curr_parent = Math.floor((cuur_size-1)/2); // 找到最后一个节点的父节点 也就是最后一个分支节点
      // shif_up(curr_parent,cuur_size-1) // 传入最后一个分支节点，数组的最后索引
      shif_up(cuur_size); //新插入元素的索引
      cuur_size+=1;
      return true
   }
    function shif_up(start) {
       var child_index = start; // 新加入的节点索引
       var parent_index =  Math.floor((cuur_size-1)/2);// 找到最后一个节点的父节点 也就是最后一个分支节点
       var min_child_index = child_index;
       while (min_child_index>0) {
           if (heap[min_child_index]<heap[parent_index]) {
               var tmp = heap[parent_index];
               heap[parent_index] = heap[min_child_index];
               heap[min_child_index] = tmp;
               min_child_index = parent_index;
               parent_index = Math.floor((min_child_index-1)/2);
           } else {
               return
           }
       }
    }
    // 删除最小值 也是就是删除顶部
    this.min_remove = function () {
       if (cuur_size<=0) {
           return null
       }
       var min = heap[0];
       heap[0] = heap[cuur_size];
       // console.log(heap[0])
       cuur_size--
       shif_down(0,cuur_size-1);
       console.log(heap)
       return min
    }
    // 获取顶部元素
    this.top = function () {
        if (cuur_size<=0) {
            return null
        }
        return heap[0];
    }
    // 打印数组
    this.print = function () {
        return heap;
    }
}


