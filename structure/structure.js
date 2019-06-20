function Structure() {
    var datas = [];
    this.addMember = function (member) {
        datas.push(member)
    }
    /**
     * 时间复杂度o(n)
     */
    this.isExist = function (member) {
       for (var i =0;i<datas.length;i++) {
           if (datas[i]==member) {
               return true
           }
       }
       return false
    }
    this.isExist1 = function (member) {
        if (datas.indexOf(member)!=-1) {
            return true
        }
        return false
    }
        /**
         * 时间复杂度o(1)
         * 存两个一样的数不考虑
         */

     this.isExist2 = function (member) {
         if (datas[member]) {
             return true
         }
         return false
     };
    this.addMember2 = function (member) {
        datas[member] = 1
    };
}

/**
 *   更节省空间的算法
 *   用二进制的方法
 *   js用了位运算符
 *   默认操作的就是32bit位
 *   bitMap排序必须不重复的数
 *   一个整数的4个字节
 *   1个字节是8个bit位
 *   bitMap方法主要用在不重复的数据上面，如果重复的话这个方法是失效的，
 *   主要利用的是二进制 一个字节是 32个bit位 每个位置上不是0 就是 1
 *   二进制是0和1的组合 通过数学算法 转换成整数
 *   排除重复数字也可以用这个方法
 **/
function Bitmap(size) {
    var bit_arr = new Array(size);
    for (var i=0;i<bit_arr.length;i++) {
        bit_arr[i] = 0
    }

    this.addMember = function (member) {
       // 数组在那个索引上
       var arr_index = Math.floor(member/32); // 一个整数32个bit位  占到相对应的索引
       var bit_index = member%32;  // 找到数组索引里相对应的bit位

        bit_arr[arr_index] =bit_arr[arr_index]|1<<bit_index;  // 进行复制
        // console.log(bit_arr[arr_index]);
        // console.log(1<<bit_index)
        // console.log(bit_arr)
    }
    this.isExist  =function (member) {
        var arr_index = Math.floor(member/32); // 找到相对应的
        var bit_index = member%32;
        if (bit_arr[arr_index]&1<<bit_index){
            return true
        }
        return false
    }

}

console.log(1<<31)
var a = new Bitmap(4);
a.addMember(31);
// a.addMember(77);
// a.addMember(89);
console.log(a.isExist(31));
