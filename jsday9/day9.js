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