var graph_dict = {
    0: { "5":2,"4":3 },
    1: { "2":7,"3":7,"4":2,"5":2 },
    2: { "8":8,"6":7,"1":7 },
    3: { "6":2,"10":3,"7":1,"1":7 },
    4: { "1":2,"7":3,"0":3 },
    5: { "14":10,"1":2,"0":2 },
    6: { "9":1,"12":4,"3":2,"2":7 },
    7: { "3":1,"11":2,"4":3 },
    8: { "9":4,"2":8,"14":1 },
    9: { "13":9,"6":1,"8":4 },
    10: { "12":6,"11":8,"3":3 },
    11: { "10":8,"7":2 },
    12: { "13":2,"10":6,"6":4},
    13: { "12":2,"9":9 },
};

var INF = 9999;
function dijkstra(graph,start,end) {
  var arr_v = [];  // 记录已经考察过的点
  var dis = {};  // 记录从start到各个点的最小距离
  var path  = {}; // 记录路径
  for (var n in graph) {
      dis[n] = INF; // 初始化最短路径 都是9999；
      path[start] = start;
  }
  dis[start] = 0;
  var min_v = start;
  while (true){
      arr_v.push(min_v);
      var v_link =  graph[min_v];
      // 得到min_v所有的连接点
      for(var k in v_link) {
        if (dis[min_v]+v_link[k]<dis[k]) {
            dis[k] = dis[min_v]+v_link[k];
            path[k] = min_v;
        }
      }
      // 从剩余的没有处理过的点中选取具有最短路径的顶点
      var min_dis = INF;
      for(var key in graph) {
          if (arr_v.indexOf(key)>=0) {
              continue;
          }
          if (dis[key]<min_dis) {
              min_dis = dis[key];
              min_v = key;
          }
      }
      if (min_dis==INF) {
          break;
      }
  }
  console.log(path)
    console.log(arr_v)
  console.log(dis)
    // 输出最短路径
  var link_path = [];
  var tmp_v = path[end];


}

dijkstra(graph_dict,1,13);
