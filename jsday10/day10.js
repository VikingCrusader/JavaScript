//筛选数组
var arr = [1500, 1200, 2000, 2100, 1800];
var arr1 = new Array();
for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 2000) {
        arr1.push(arr[i])
    }
}
console.log(arr1);
//翻转数组
var arr = ['pink', 'red', 'blue'];
var arr1 = arr.reverse();
console.log(arr1);
//数组排序
var arr = [7, 9, 8, 0, -1, 23, 77, -99, 999, 111];
var arr1 = arr.sort(function (a, b) {
    return a - b;//升序
});
console.log(arr1);
var arr1 = arr.sort(function (a, b) {
    return b - a;//降序
});
console.log(arr1);
//查询数组元素索引
var arr = [7, 9, 8, 0, -1, 23, 77, -99, 0, 999, 111];
console.log(arr.indexOf(0));
console.log(arr.lastIndexOf(0));
console.log(arr.indexOf(98));
//数组去重案例
var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
var newarr = new Array();
for (var i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) == -1) {
        newarr.push(arr[i]);
    }
}
console.log(newarr);
//数组转换为字符串
var arr = [1, 2, 3];
console.log(arr.toString());
var arr = [1, 2, 3];
console.log(arr.join('.'));
console.log(arr.join('!'));
console.log(arr.join(''));

//concat
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
//slice
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr3.slice(0, 3)); //不包括索引3

//splice()
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr3.splice(0, 3));
console.log(arr3);

var str = 'andy';
console.log(str.length);

//字符串对象 根据字符返回位置
var str = '改革春风吹满地,春天来了';
console.log(str.indexOf('春'));
console.log(str.indexOf('春', 5));