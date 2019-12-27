/***
 * 邻接矩阵表示图
 * 你
 *
 */
 const max_value = 9999;
 function Graph() {
     var maps = [];
     var node_num = 0; //点的数量，顶点的数量
     var edge_num = 0; //边的数量
     this.init = function (input_maps) {
         maps = input_maps;
         node_num = this.get_node_num();
         edge_num = this.get_dege_num();
     };
     // 获得顶点数量
     this.get_node_num = function () {
         if(node_num!=0) {
          return node_num
         }
         return maps.length;
     };
     // 获得边的数量
     this.get_dege_num = function () {
        if (edge_num!==0) {
           return edge_num;
        }
        var count = 0;

     };
 }