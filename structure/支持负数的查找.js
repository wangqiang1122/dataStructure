/**
 * bitMap支持负数
 * 这里所讲的bitmap只能存储大于等于0的整数,改造现在bitmao类，无论整数还是负数，都可以存储并且判断是否存在
 *
 * 思路分析
 * 可以用来个那个数组存储数据,一个存储等于0的整数，另一个存储小于0的整数，不过既然已经有实现好的bitmap类，我们拿过来直接使用，利用它在封装一个类
 *
 */

 function SuperbitMap(size) {
    var positive_bit_map = new BitMap(size);
    var negative_bit_map = new BitMap(size);
    this.addMember = function (member) {
      if (member>=0) {
          positive_bit_map.addMember(member)
      } else {
          negative_bit_map.addMember(member)
      }
    };
    /**
     *  查询数组里有没有这个数
     */
    this.isExit = function (member) {
        if (member>=0) {
           return positive_bit_map.isExist(member)
        } else {
           return negative_bit_map.isExist(member)
        }
    };
 }
