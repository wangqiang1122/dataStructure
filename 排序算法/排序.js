var a = [2,4,6,7,8];
var b = [1,3,5];

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
   console.log(merage_arr)

}

merrage(a,b)