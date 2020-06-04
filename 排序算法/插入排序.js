function insert_sort(arr,start,end ) {
  for(var i=start+1;i<=end;i++) {
      if (arr[i-1]>arr[i]) {
          var tmp = arr[i]; // 例如  1
          // 重点考虑
          var j = i-1; // 上一个  例如 0

          while(j>=start&&arr[j]>tmp) {
              arr[j+1]=arr[j];
              // 进行减减操作
              j--
          }
          arr[j+1] = tmp;
      }
  }
}

var arr = [44,7,2,8,1,4,6,9,3,66];
insert_sort(arr,0,arr.length-1); // 插入排序必须要求必须 从0开始 才能排序

console.log(arr)

module.exports = {
    insert_sort: insert_sort
}
