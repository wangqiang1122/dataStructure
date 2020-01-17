function binary_search(arr,target,start,end) {
    if (start>end) {
        return -1;
    }
    var middle = Math.floor((start+end)/2);
    if (arr[middle]==target) {
        return middle
    } else if(arr[middle]>target) {
        // 向左走
        return binary_search(arr,target,start,middle-1)
    } else if(arr[middle]<target) {
        // 向右走
        return binary_search(arr,target,middle+1,end)
    }
}

var arr = [1,3,4,6,7,9,10];
console.log(binary_search(arr,3,0,arr.length-1));