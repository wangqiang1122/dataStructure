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
            item[index].append(key,value);
            ++key_code;
            console.dir( item[index].head())
        }

        if (this.is_kuo()) {
            this.expend();
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
            --key_code
           return node.remove_key(key)
        } else {
            return null
        }
    }
    // 如果数据过多会影响查找速度 需要扩容
    this.expend =function () {
        // 放到临时数组里
        var temp_arr = [];
        for (var a=0;a<item.length;a++) {
            temp_arr[a] = item[a]
        }
        // 老数组进行扩容
        this.size = 20;
        item = [];
        // 找到新的质数
        divsor = this.iszhishu(this.size);
        // 重置数组数据源链表
        for(var i=0;i<this.size;i++ ) {
            item[i] = new linkList();
        }
        // 数据源重新分配
        for(var b=0;a<temp_arr.length;a++) {
            var link = temp_arr[b];
            var current = link.head();
            while (current){
                this.set(current.data,current.value)
                current = current.next;
            }
        }

    };
    // 判断数据是否需要扩容
    this.is_kuo = function () {
        if ((key_code/divsor)>=5) {
           return true
        }
        return false
    }
    this.hashKey = function (key) {
        var index = get_index(key);
        var node = item[index].search(key);
        return node;
    }
}

