var arr = [55,44,3,2,6,8,9,66,33,77];

// function fenjie(a) {
//     var i = Math.floor(a.length/2);
//     var arr1 = a.slice(0,i);
//     var arr2 = a.slice(i,a.length-1);
//     console.log(arr1);
//     console.log(arr2);
// }
function merage_sort_arr(arr,start,end) {
    if (start<end) {
        // 分
        var middle = Math.floor((start+end)/2);
        var arr1 = merage_sort_arr(arr,start,middle);
        var arr2 = merage_sort_arr(arr,middle+1,end);
        // 治
        return merrage(arr1,arr2);
    }
    return [arr[start]]
}
function merage_sort(arr) {
    return merage_sort_arr(arr,0,arr.length-1)
}

function merrage(arr1,arr2) {
    var index1 = 0;
    var index2 = 0;
    var merage_arr = [];
    while (index1<arr1.length&&index2<arr2.length) {
        if (arr1[index1]<arr2[index2]) {
            merage_arr.push(arr1[index1]);
            index1+=1;
        } else {
            merage_arr.push(arr2[index2]);
            index2+=1;
        }
    }
    if (index1<arr1.length) {
        while (index1<arr1.length){
            merage_arr.push(arr1[index1]);
            index1+=1;
        }
    }
    if (index2<arr2.length) {
        while (index2<arr2.length){
            merage_arr.push(arr2[index2]);
            index2+=1;
        }
    }
    return merage_arr
    console.log(merage_arr)

}

console.log(merage_sort(arr));