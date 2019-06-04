function StackMin() {
    var stack_data = new Stack();
    var stack_min = new Stack();
    this.push = function(num) {
        var a = Number(num)
        stack_data.push(a)
        if (stack_min.isEmpty()||(stack_min.top()>a)) {
            stack_min.push(a)
        } else {
            stack_min.push(stack_min.top())
        }
    }

    this.min = function () {
        return stack_min.top()
    }
}