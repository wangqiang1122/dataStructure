
let Queue = require('./queue')

function print_san(n) {
    var queue = new Queue();
    queue.enqueue(1);
    // 打印多少行
    for (var i=0;i<=n;i++) {
        var pre = 0;
        var line = '';
        // 打印多少个
        for (var j =0; j<i;j++) {
            var item = queue.dequeue();
            line += item + '   ';
            var value = item + pre;
            console.log(value)
            pre = item;
            queue.enqueue(value)
        }
        queue.enqueue(1)
        console.log(line)
    }
    // console.log(queue.me())
}

print_san(3)