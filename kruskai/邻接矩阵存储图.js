/***
 * 邻接矩阵表示图
 * 你
 *
 */
 const max_value = 9999;
 const arr = [
     [0,28,max_value,max_value,max_value,10,max_value,max_value,max_value],
     [28,0,16,max_value,max_value,max_value,14,max_value,max_value],
     [max_value,16,0,12,max_value,max_value,max_value,max_value,max_value],
     [max_value,max_value,12,0,22,max_value,18,max_value,max_value],
     [max_value,max_value,max_value,22,0,25,24,max_value,max_value],
     [10,max_value,max_value,max_value,25,0,max_value,max_value,max_value],
     [max_value,14,max_value,18,24,max_value,0,max_value,max_value],
     [max_value,max_value,max_value,max_value,max_value,max_value,max_value,0,9],
     [max_value,max_value,max_value,max_value,max_value,max_value,max_value,9,0]
 ]
 function Graph(map) {
     // var maps = [
     //     [0,28,max_value,max_value,max_value,10,max_value],
     //     [28,0,16,max_value,max_value,max_value,14],
     //     [max_value,16,0,12,max_value,max_value,max_value],
     //     [max_value,max_value,12,0,22,max_value,18],
     //     [max_value,max_value,max_value,22,0,25,24],
     //     [10,max_value,max_value,max_value,25,0,max_value],
     //     [max_value,14,max_value,18,24,max_value,0]
     // ]
     var maps = map;

     var node_num = 0; //点的数量，顶点的数量
     var edge_num = 0; //边的数量
     this.init = function () {
         // maps = input_maps;
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
        for(var i=0;i<node_num;i++) {
            for(var j = i+1;j<node_num;j++) {
                if(maps[i][j]>0&&maps[i][j]<max_value) {
                    count++;
                }
            }
        }
        return count;
     };
     // 权重
     this.get_weight = function (u,v) {
         return maps[u][v];
     }
     // 深度优先遍历
     var graph_dfs = function (v,visited,component) {
         visited[v] =1;
         component.push(v);
         var row = maps[v];

         for (var i=0;i<row.length;i++) {
             if ((row[i]<max_value)&&(visited[i]==0)) {
                 graph_dfs(i,visited,component)
             }
         }
     }
     // 从顶点开始深度遍历
     this.dfs = function (v) { //v 是设置的跟节点
         var visited = [];
         var component = []; // 存储连通分量
         // 初始化全部图的的所有顶点
         for (var i=0;i<node_num;i++) {
             visited[i] = 0;
         }
         graph_dfs(v,visited,component);
         console.log(visited)
         return component
     }

     // 广度优先遍历 使用队列的方法来进行分层
     var graph_bfs = function (v,visited,component) {
         var queue = new Queue();
         queue.enqueue(v);
         visited[v]=1;
         visited.push(v);
         component.push(v);
         console.log(v)
         while (!queue.isEmpty()) {
             var visited_v = queue.dequeue();
             var row = maps[visited_v];
             for(var a=0;a<row.length;a++) {
                 if (row[a]<max_value&&visited[a]==0) {
                     queue.enqueue(a);
                     visited[a] = 1;
                     component.push(a);
                 }
             }
         }

     }
     this.bfs = function (v) {
         var visited1 = [];
         var component = []; // 存储连通分量
         // 初始化全部图的的所有顶点
         for (var i=0;i<node_num;i++) {
             visited1[i] = 0;
         }
         graph_bfs(v,visited1,component);
         // console.log(visited1)
         return component
     }
     // 连通分量 (获取所有的连通分量)
     this.components = function () {
         var visited = [];
         var component_lit = [];
         for(var i=0;i<node_num;i++) {
             visited[i]=0;
         }
         for(var a=0;a<node_num;a++) {
             if (visited[a]==0) {
                 var component = [];
                 graph_bfs(a,visited,component)
                 component_lit.push(component)
             }
         }
         return component_lit;
     }

 }
 // var a = new Graph(arr);
 // a.init()
 // console.log(a.components())