// 寻找第一个比target大的位置

function binary_search_bigger(arr,target,start,end) {
   if (arr[start]>target) {
       return start;
   }
   if (start>end) {
       return -1;
   }
   var middle = Math.floor((start+end)/2);
   if(arr[middle]<=target){
       if (arr[start+1]>target) {
           return start+1
       }
      return binary_search_bigger(arr,target,middle+1,end);
   } else {
      return binary_search_bigger(arr,target,start,middle-1)
   }
}

var arr = [1,3,4,6,7,9,10];
console.log(binary_search_bigger(arr,4,0,arr.length-1));