var arr = new Array();
var obj = new Object();
//使用date必须用new
var date = new Date();
console.log(date);
var date1 = new Date(2019, 10, 1);
console.log(date1);//返回的是11月，不是10月
var date2 = new Date('2019, 10, 1');
console.log(date2);//字符串就正常
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log('今天是' + date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日');
function getTime() {
    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    var min = date.getMinutes();
    min = min < 10 ? '0' + min : min;
    var sec = date.getSeconds();
    sec = sec < 10 ? '0' + sec : sec;
    return '' + hour + '时' + min + '分' + sec + '秒';
}
console.log(getTime());

var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());
var date1 = + new Date();
console.log(date1);
console.log(Date.now());


//数组对象的创建
var arr = new Array();
var arr = new Array(2);
console.log(arr);
var arr1 = new Array(2, 3);
console.log(arr1);

//intanceof()检测是否为数组
console.log(arr instanceof Array);
console.log(Array.isArray(1, 2, 3));
console.log(Array.isArray([1, 2, 3]));

var arr2 = [1, 2, 3, 4];
console.log(arr2.push(1));
console.log(arr2);
console.log(arr2.unshift('red'));
console.log(arr2);
arr2.pop();
console.log(arr2);