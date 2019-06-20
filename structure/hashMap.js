/**
 * 计算hash值
 * @param key 你要计算散列的值
 * @param seed 就是种子
 * @returns {number}
 * 同一个key不同的种子会返回去不同的结果
 * 这正是我们想要的，布隆过滤器需要k个hash值，对于一个传入的key，传入k个种子就可以得到key个散列结果了
 */

function murmurhash3_32_gc(key, seed) {
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;

    while (i < bytes) {
        k1 =
            ((key.charCodeAt(i) & 0xff)) |
            ((key.charCodeAt(++i) & 0xff) << 8) |
            ((key.charCodeAt(++i) & 0xff) << 16) |
            ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;

        k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
        h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
    }

    k1 = 0;

    switch (remainder) {
        case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1: k1 ^= (key.charCodeAt(i) & 0xff);

            k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= k1;
    }

    h1 ^= key.length;

    h1 ^= h1 >>> 16;
    h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
    h1 ^= h1 >>> 16;

    return h1 >>> 0;
}

function BoolmFilter(max_count,error_rate) {
    //位图映射变量
    var bitMap = [];
    // 最多可放数量
    var max_count = max_count;
    // 错误率
    var error_rate = error_rate;
    // 位图变量的长度
    var bitsize = Math.ceil(max_count*(-Math.log(error_rate))/(Math.log(2)*Math.log(2)));
    // hash数量
    var hash_ount =  Math.ceil(Math.log(2)*(max_count/error_rate));
    console.log(bitsize);
    console.log(hash_ount);
    while (bitsize){
        bitMap[bitsize] =0;
        bitsize--
    }


    // 设置位的值
    function set_bit(bit) {
        // 计算所在的索引
        var arr_index = Math.floor(bit/32);
        // 计算该索引具体的那个bit位
        var data_index = Math.floor(bit%32);
        bitMap[arr_index] =  bitMap[arr_index]| (1<<data_index)
    }
    // 获取位置
    function get_bit(bit) {
        // 计算所在的索引
        var arr_index = Math.floor(bit/32);
        // 计算该索引具体的那个bit位
        var data_index = Math.floor(bit%32);
        if (bitMap[arr_index]&(1<<data_index)) {
            return true
        }
        return false
    }
    this.add = function (key) {
        if (this.isExist(key)) {
            throw new Error('已存在')
        }
       for (var i=0;i<hash_ount;i++) {
           var hash_value = murmurhash3_32_gc(key,i);
           // hash_value 有可能比bitsize大所以求莫
           set_bit(Math.abs(Math.floor(hash_value%bitsize)))
       }
    }
    this.isExist  =function (key) {
        for (var i=0;i<hash_ount;i++) {
            var hash_value = murmurhash3_32_gc(key,i);
            // hash_value 有可能比bitsize大所以求莫
            return get_bit(Math.abs(Math.floor(hash_value%bitsize)))
        }
    }
}


// console.log(murmurhash3_32_gc('www.badu,com',3))


var a =new BoolmFilter(10000000,0.01);

a.add('http://localhost:4200/#/coupon-detail/0/1');


console.log(a.isExist('http://localhost:4200/#/coupon-detail/0/1'))