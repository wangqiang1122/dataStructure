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
     }
    this.addMember2 = function (member) {
        datas[member] = 1
    }
    /**
    *   更节省空间的算法
    * */

}