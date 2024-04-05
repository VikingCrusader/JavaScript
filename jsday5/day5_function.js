//声明函数
function sayHi() {
    console.log('Hi!');
}
sayHi();
//参数
function cook(aru) {
    console.log(aru);
}

cook('tomato');

//  利用函数求两个数的和
function add(a, b, sum) {
    c = Number(a) + Number(b);
    return sum;
}
add(1, 2);
add(1, 2, 3);
add(1);

//利用函数求两个数最大值
function greater(a, b) {
    var great = 0;
    if (a >= b) {
        great = a;
    }
    else {
        great = b;
    }
    return great;
}
console.log(greater(3, 5));
function nah(num1, num2) {
    return Number(num1) + Number(num2);
    alert('im not be desplayed');//return后面的不会被执行
}
console.log(nah(1, 2));


function fn() {
    console.log(arguments);//里面存储了所有传递过来的是惨‹
    console.log(arguments.length);
    console.log(arguments[0]);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fn(1, 2, 3);
fn(1, 2, 3, 4, 5, 6)
//利用函数求任意个数的最大值
function getmax() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(getmax(2, 3, 4, 1, 7, 0, 6));
console.log(getmax(1, 7, 3));
console.log(getmax(99, 77, 66));


//函数的两种声明方式
// 1.function 函数名()
// 2.var 变量名 = function(){}
var fun = function () {
    console.log('我是函数表达式');
}
fun();
//fun是变量名 不是函数名
//函数没有名字 它是匿名函数