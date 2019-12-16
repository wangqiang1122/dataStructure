/**
 *  质数概念只能被1和他本身整除
 *
 *
 * @constructor
 */


function HashTable() {
    this.size = 10;  // 数组的数量等于10
    this.zhishu = null;
    var item = [];
    var divsor = 7; // 质数
    var key_code = 0; // 数据个数计数
    var get_index = function (key) {
      var tmp_key = key.toString();
      var hash_value = murmurhash3_32_gc(tmp_key,0);
      return hash_value%divsor;
    };
    var iszhishu = function (n) {
        if (n === 2 || n === 3) {
            return true
        }
        if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {
            return false;
        }
        for (let x = 6; x <= Math.sqrt(n) + 1; x += 6) {
            if (n % (x - 1) == 0 || n % (x + 1) == 0) {
                return false
            }
        }
        return true
    }
    this.init = function () {
        item = new Array(this.size);
        // 数组里面放列表
        for (var i=0;i<item.length;i++) {
            item[i] = new linkList()
        }
        console.log(item);
        // 获取质数除数
        var temp = this.size;
        while (temp>2) {
           if (iszhishu(temp)) {
               divsor =  temp;
               break
           }
            --temp
        }
        console.log(temp)
    }
    this.set = function (key,value) {
        var index = get_index(key);
        var node = item[index].search(key);
        console.log(node)
        if (node) {
            node.value = value
        } else {
            item[index].append(key,value)
            console.dir( item[index].head())
        }
    }
    this.get=function (key) {
        var index = get_index(key);
        var node = item[index].search(key);
        if (node) {
            return node.value
        } else {
            return null
        }
    }
    this.remove = function (key) {
        var index = get_index(key);
        var node = item[index];
        if (node) {
           return node.remove_key(key)
        } else {
            return null
        }
    }
    this.hashKey = function (key) {
        var index = get_index(key);
        var node = item[index].search(key);
        return node;
    }
}

