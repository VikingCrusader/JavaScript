//复习昨天的switch语句
var fruit = prompt('请输入您要购买的水果');
switch (fruit) {
    case 'apple':
        alert('2块一斤');
        break;
    case 'pear':
        alert('3块一斤');
        break;
    default:
        alert('很抱歉，没有查询到本店有这种水果');
        break;
}
复习加法器
var a = prompt('a?');
var b = prompt('b?');
var c = parseInt(a) + parseInt(b);
alert('c=' + c + '');

//循环
for (var i = 1; i <= 150; i++) {
    console.log("你好");
}
//打印一个人的岁数
for (var i = 1; i <= 100; i++) {
    if (i == 1) {
        console.log('这个人今年1岁了，他出生了');
    } else if (i == 100) {
        console.log('这个人今年100岁了，他死了');
    } else {
        console.log('这个人今年' + i + '岁了');
    }

}
//1-100的整数和
sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
//1 - 100的能被3整除的整数和
sum1 = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        sum1 += i
    }
}
console.log(sum1);
//求平均成绩案例
var summary = 0;
var person = prompt('班级人数是多少？');
for (var i = 1; i <= person; i++) {
    score = prompt('请输入第' + i + '个人的成绩');
    summary += Number(score);
}
var avg = parseFloat(summary / person);
console.log('班级总成绩：' + summary + '');
console.log('班级平均成绩：' + avg + '');

//一行打印五颗星星
var str = '';
for (var i = 1; i <= 5; i++) {
    str = str + '*';
}
console.log(str);
//循环嵌套
for (var i = 1; i <= 3; i++) {
    console.log('这是外层循环第' + i + '次');
    for (var j = 1; j <= 3; j++) {
        console.log('这是里层循环第' + j + '次');
    }
}
//n行n列的星星
var str = '';
var n = prompt('how many lines?')
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        str = str + '*';
    }
    str = str + '\n';
}
console.log(str);
//打印倒三角形
var str = '';
var n = prompt('how many lines?');
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n - i + 1; j++) {
        str = str + '*';
    }
    str = str + '\n';
}
// console.log(str);
//九九乘法表
var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str = str + '' + i + '*' + j + '=' + i * j + ' ';
    }
    str = str + '\n';
}
console.log(str);
//while循环打印人的一生
var i = 1;
while (i <= 100) {
    console.log('the person is ' + i + ' yo');
    i++;
}
//dowhile打印1-100整数的和
var i = 1;
summ = 0;
do {
    summ += i;
    i++;
}
while (i <= 100);
console.log(summ);
求整数1--100的累加值，但要求跳过所有各位为3的数
var total = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 10 == 3) {
        continue;
    }
    total = total + i;
}
console.log(total);
//用户输入

