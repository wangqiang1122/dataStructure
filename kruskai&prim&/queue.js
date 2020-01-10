function Queue() {
    var item = [];
    this.enqueue = function (str) {
        item.push(str)
    }
    this.dequeue = function () {
        return item.shift();
    }
    this.head = function () {
        return item[0]
    }
    this.size = function () {
        return item.length
    }
    this.clear = function () {
        item = null;
        item = [];
    }
    this.isEmpty = function () {
        if (item.length!==0) {
            return false
        } else {
            return true
        }
    }
    this.tail = function () {
        return item[item.length-1]
    }
    this.me  = function () {
        return item
    }
}

// module.exports = Queue;