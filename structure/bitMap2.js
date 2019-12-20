/**
 * bitMap 有长度限制
 * 查找重复的数
 * 一个32位的bit位只能查找
 * 一位表示这个数是否存在 ，一位表示这个数是否重复
 * @param size
 * @constructor
 *
 * 用两个bitMap 也可以实现此功能
 * 找出不重复的数
 */

function BitMap(size) {
    var bit_arr = [];
    var bit_arr1 = [];//放重复数据用的

    for (var i =0;i<size;i++) {
        bit_arr[i] = 0;
        bit_arr1[i] = 0;
    }
    /**
    * 只能查询有没有这个这个数 数据量多可以方便快速查找
     * 把整数加上去
    * */
    this.addMember = function (member) {
      // 计算数组的索引位置
      var arr_index = Math.floor(member/16);
      // 具体bit位的位置
      var bit_index = member%16;
      // console.log(this.isExist(member))
      if(this.isExist(member)) {
          bit_arr1[arr_index] =  bit_arr[arr_index]|(1<<bit_index)
          return
      }
      bit_arr[arr_index] =  bit_arr[arr_index]|(1<<bit_index)
    };
    /**
     *  查询数组里有没有这个整数
     */
    this.isExist = function (member) {
        // 计算在数组的位置
        var arr_index = Math.floor(member/16);
        // 具体bit位的位置
        var bit_index = member%16;
        if (bit_arr[arr_index]&(1<<bit_index)) {
            return true
        }
        return false
    }
    /**
     * 找出重复的
     * 找出不重复的数
     */
    this.isRepeat =function (member) {
        // 计算在数组的位置
        var arr_index = Math.floor(member/32);
        // 具体bit位的位置
        var bit_index = member%32;
      if (this.isExist(member)&&(bit_arr1[arr_index]&(1<<bit_index))) {
          return member
      }
      return null
    }
}