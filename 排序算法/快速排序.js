
var arr = [0,55,44,3,2,6,8,9,66,33,77];

function partition(arr,start,end) {
    var pivopos = start;
    var pivot = arr[start]; // 基准点
    for (var i=start;i<=end;i++) {
        // console.log(pivot);
        // console.log(arr[i])
        if (arr[i]<pivot) {
            console.log(arr[i])
            pivopos++;
            if (pivopos!=i) {
                var temp = arr[pivopos];
                arr[pivopos] = arr[i];
                arr[i] = temp
            }
        }
    }
    arr[start] = arr[pivopos];
    arr[pivopos] = pivot;
    console.log(pivopos);
    return pivopos;
}

var f = [5,3];



function quick_sort_ex(arr,start,end) {
    if (start<end) {
        var pivopos = partition(arr,start,end);
        quick_sort_ex(arr,start,pivopos-1);
        quick_sort_ex(arr,pivopos+1,end)
    }
}
function quick_sort(arr) {
    quick_sort_ex(arr,0,arr.length-1)
}

quick_sort(arr);
console.log(arr);
