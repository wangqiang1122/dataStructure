
// var max_value = 9999;
const arr1 = [
    [0,28,max_value,max_value,max_value,10,max_value],
    [28,0,16,max_value,max_value,max_value,14],
    [max_value,16,0,12,max_value,max_value,max_value],
    [max_value,max_value,12,0,22,max_value,18],
    [max_value,max_value,max_value,22,0,25,24],
    [10,max_value,max_value,max_value,25,0,max_value],
    [max_value,14,max_value,18,24,max_value,0]
];
var Edge = function (head,tail,cost) {
  this.head = head;
  this.tail = tail;
  this.cost = cost;
};
function prim(graph,v) {
    var mst = [];
    var get_node = graph.get_node_num();
    var get_dege = graph.get_dege_num();
    var b_mst = [];
    // b_mst标识那些已经初始化 (标识那些顶点没有遍历过)
    for (var i=0;i<get_node;i++) {
        b_mst[i] = 0;
    }
    b_mst[v] = 1;
    var count = 1;
    var start_v = v;
    var min_heap = new Minheap();
    console.log(min_heap);

    while (count<(get_node)) {
      for (var a=0;a<get_node;a++) {
         if (b_mst[a]==0) {
             var cost = graph.get_weight(start_v,a);
             if (cost!=max_value) {
                 var ed = new Edge(start_v,a,cost);
                 min_heap.insert(ed);
             }
         }

      }
      while (min_heap.size()!=0) {
          var ef = min_heap.min_remove();
          if (b_mst[ef.tail]==0) {
              mst.push(ef);
              start_v=ef.tail;
              b_mst[start_v] = 1;
              count+=1;
              break
          }
      }
    }
    return mst;
}

var graph = new Graph(arr1);
graph.init();
var mst = prim(graph,1);


console.log(mst);
