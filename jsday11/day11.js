// find all 'o' in this string, the positions and times.
var str = 'abcoefoxyozzoppooooo';
//查第一个
var index = str.indexOf('o');
while (index != -1) {
    console.log(index);
    //从当前位置往后面查找
    index = str.indexOf('o', index + 1);
}

var arr = ['red', 'blue', 'red', 'green', 'pink', 'red'];

//求red出现的位置和次数
var index = arr.indexOf('red');
while (index != -1) {
    console.log(index);
    index = arr.indexOf('red', index + 1);
}

//根据位置返回字符
var str = 'andy';
console.log(str.charAt(0));
//遍历所有字符

//返回ASCII码
console.log(str.charCodeAt(0));

//获取指定位置字符
var str2 = 'sdjjdjdjdjpp';
console.log(str[3]);