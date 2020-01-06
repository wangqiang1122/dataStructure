
 const max_value1 = 9999;


function kruskai(graph) {
    var mst = [];
    var get_node = graph.get_node_num();
    var get_dege = graph.get_dege_num();
    console.log(get_node);
    var min_heap = new Minheap();
    var ufset = new UFSets();
    ufset.init(get_node);
    for (var i=0;i<get_node;i++) {
        for(var j=i+1;j<get_node;j++) {
            var cost = graph.get_weight(i,j);
            if (cost<max_value1) {
                var edge = new Edge(i,j,cost);
                min_heap.insert(edge)
            }
        }
    }
    const count = 1;
    console.log(min_heap.print())
}

var Edge = function (head,tail,cost) {
  this.head = head;
  this.tail = tail;
  this.cost = cost;
};


const arr1 = [
    [0,28,max_value,max_value,max_value,10,max_value,max_value,max_value],
    [28,0,16,max_value,max_value,max_value,14,max_value,max_value],
    [max_value,16,0,12,max_value,max_value,max_value,max_value,max_value],
    [max_value,max_value,12,0,22,max_value,18,max_value,max_value],
    [max_value,max_value,max_value,22,0,25,24,max_value,max_value],
    [10,max_value,max_value,max_value,25,0,max_value,max_value,max_value],
    [max_value,14,max_value,18,24,max_value,0,max_value,max_value]
];
// [max_value,max_value,max_value,max_value,max_value,max_value,max_value,0,9],
// [max_value,max_value,max_value,max_value,max_value,max_value,max_value,9,0]


var graph = new Graph(arr1);
graph.init();
var mst  =kruskai(graph);