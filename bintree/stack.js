function Stack() {
    var items = []; // 数据存储  不推荐这样写 用了this就被暴露出去了
    this.type = function (item) {
        if ({}.toString.call(item).indexOf('String')!==-1
            || {}.toString.call(item).indexOf('Array')!==-1
            || {}.toString.call(item).indexOf('Number')!==-1
            || {}.toString.call(item).indexOf('Object')!==-1) {
            return true
        } else {
            return false;
        }
    }
    // push 从栈顶添加元素     压栈
    this.push = function (item) {
        if (this.type(item)) {
            items = items.concat(item)
        }
        // this.items.push(item)
    }
    // pop
    this.pop  =function () {
            return items.pop();
    };
    // top
    this.top = function () {
        if (items.length ===0) {
            return ''
        } else {
            return items[items.length-1];
        }
    };
    // isEmpty
    this.isEmpty = function () {
        if (items.length ===0) {
            return true
        } else {
            return false
        }
    };
    // size
    this.size = function () {
        return items.length;
    };

    // clear
    this.clear = function () {
        items= [];
        console.log(items)
    };
    this.min = function () {
        return Math.min.apply(items,items);
    }
    this.arr = function () {
        return items;
    }
}

export default Stack
