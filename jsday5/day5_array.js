//数组的创建
var arr = new Array();
var num = [1, 2, 3, 4];
var arr = [];
var arr1 = [1, 2, 'sss', false];//放置任何数据类型
//输出数组元素
console.log(arr1);
console.log(arr1[2]);
var arr2 = ['red', 'green', 'blue'];
for (var i = 0; i <= 2; i++) {
    console.log(arr2[i]);
}
console.log(arr2.length);
var arr3 = [2, 6, 1, 7, 4];
//计算和 以及平均值
var sum = 0;
for (var i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log(sum);
console.log(sum / arr3.length);
//计算数组元素最大值
var max = 0;
for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
    }
}
console.log(max);
//数组转化为字符串
var str = '';
var arrcolor = ['red', 'green', 'blue', 'pink'];
for (var i = 0; i < arrcolor.length; i++) {
    str += arrcolor[i];
    str += '|';
}
console.log(str);
// 数组新增元素
arrcolor.length = 5;
console.log(arrcolor);
//修改数组索引
arr3[5] = 9;
console.log(arr3);
//数组元素替换
arr3[0] = 4;
console.log(arr3);

//新建一个数组，存放10个整数，1-10
var arr10 = [];
for (var i = 0; i < 10; i++) {
    arr10[i] = i + 1;
}
console.log(arr10);


//数组筛选
var arrshaixuan = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var j = 0;
var newarr = [];
var newarr1 = [];
for (var i = 0; i < arrshaixuan.length; i++) {
    if (arrshaixuan[i] >= 10) {
        newarr.length += 1;
        newarr[newarr.length - 1] = arrshaixuan[i];
    }//第一种筛选方法
    if (arrshaixuan[i] >= 10) {
        newarr1[j] = arrshaixuan[i];
        j++;
    }//第二啊种筛选方法
}
console.log(newarr);
console.log(newarr1);

//删除数组中的0
var k = 0;
var newarr2 = [];
for (var i = 0; i < arrshaixuan.length; i++) {
    if (arrshaixuan[i] != 0) {
        newarr2[k] = arrshaixuan[i];
        k++;
    }
}
console.log(newarr2);

//翻转数组
var l = 0;
var convertedarr = [];
for (var i = arrshaixuan.length - 1; i >= 0; i--) {
    convertedarr[l] = arrshaixuan[i];
    l++;
}
console.log(convertedarr);

//冒泡排序 从小到大
var maopao = [9, 7, 6, 32, 2, 34, 88, 0, 76, 22, 33, 5, 22, 3];
for (var i = 0; i < maopao.length; i++) {
    for (var j = 0; j < maopao.length - i; j++) {
        if (maopao[j] > maopao[j + 1]) {
            temp = maopao[j];
            maopao[j] = maopao[j + 1];
            maopao[j + 1] = temp;
        }
    }
}
console.log(maopao);