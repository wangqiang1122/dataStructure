
var sort_quick = require('./插入排序');

function bucket_sort(arr) {
    var sort_arr = [];
    var buckets = new Array(4);
    for (var a=0;a<buckets.length;a++) {
        buckets[a] = [];
    }
    // 放入对应的桶中
    for(var i=0;i<arr.length;i++) {
        var index = Math.floor(arr[i]/100);buckets
        console.log(buckets[index]);
        buckets[index].push(arr[i]);
    }
    // 对每个桶进行排序
    for (var b=0;b<buckets.length;b++) {
        sort_quick.insert_sort(buckets[b],0,buckets[b].length-1)
    }
    // 合并成一个数组
    for(var c =0;c<buckets.length;c++) {
       for (var d=0;d<buckets[c].length;d++) {
           sort_arr.push(buckets[c][d])
       }
    }
    console.log(sort_arr)
}


bucket_sort([99,77,7,2,8,1,4,6,9,3,5]);
