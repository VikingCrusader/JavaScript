

var str = 'abcoefoxyozzopp'
var o = {};
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (o[chars]) {
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}

console.log(o);
var max = 0;
var ch = ''
for (var k in o) {
    //k是属性名
    //o[k]得到属性值
    if (o[k] > max) {
        max = o[k];
        ch = k;
    }
}
console.log(max);
console.log(ch);