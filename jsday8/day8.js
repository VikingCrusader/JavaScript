function Eproducts(type, brand, generation, price) {
    this.type = type;
    this.brand = brand;
    this.generation = generation;
    this.price = price;
    this.ability = function (abili) {
        console.log(abili);
    }
}

var ipad = new Eproducts('tablet', 'apple', 8, '1000 EUR');
var iphone = new Eproducts('phone', 'apple', '13promax', '1200EUR');
ipad.ability('taking notes');
iphone.ability('calling');
console.log(ipad.price);
console.log(iphone.generation);

console.log('for in loop');
// for in 遍历
// for (变量 in 对象)
for (var k in ipad) {
    console.log(k);   //输出变量，得到的是属性名: type brand generation etc
    console.log(ipad[k]); //输出属性值，必须用中括号
}
//使用for..in 的变量，喜欢用k或者key

//math数学对象
console.log(Math.PI);
console.log(Math.max(1, 2, 5, 8, 44, 2));
console.log(Math.max(1, 2, 6, 'sss')); //NaN

//封装数学对象
var mymath = {
    PI: 3.141592653,
    max: function () {
        var max = arguments[0]
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function () {
        var min = arguments[0]
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
}
console.log(mymath.PI);
console.log(mymath.max(1, 2, 5, 9, 2));
console.log(Math.abs(-1));
console.log(Math.abs('-1'));
console.log(Math.round(-1.5));
console.log(Math.random());



//随机点名
// var arr = ['张三', '李四', '王五', '赵六', '刘七', '陈八'];
// console.log(arr[getRandomIntInclusive(0, 5)]);

//案例：猜数字游戏
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
}
var number = getRandomIntInclusive(1, 100);
var sum = 0;
while (1) {
    var guess = prompt('请输入1-100中您猜的数字:');
    if (guess == number) {
        sum += 1;
        alert('恭喜您，猜对了!游戏结束！您用了' + sum + '次就猜对了，真棒！');
        break;
    }
    if (guess > number) {
        sum += 1;
        alert('猜大了，往小了猜！已用次数:' + sum + '');
        continue;
    } else {
        sum += 1;
        alert('猜小了，往大了猜！已用次数:' + sum + '');
        continue;
    }
}