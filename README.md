# JavaScript
Day 1-2 April 1st-2nd B站网课1-20
1.JS书写位置 行内 内嵌 外部
行内：不推荐，会使html太乱 <input type="button" value="唐伯虎" onclick="alert(点秋香)">
内嵌：短的代码很常用 语法：<script></script> js代码写在中间
外部：<script src="my.js"></script> 注意中间不能有代码，必须是空的
2.JS输入输出
alert('')弹出警示框
prompt('')弹出输入框，用户可以输入
console('')浏览器控制台打印输入信息，只有程序员可以看到
控制台快捷键：win F12 mac cmd+opt+J
3.JS变量
声明变量 var age = 18；
声明字符串变量 var name = "my name";
var myname = prompt('请输入姓名');请求用户输入姓名
alert(myname);打印输入的姓名
声明多个变量，中间用逗号隔开，最后分号结尾，只写一个var就行
var name='jjjj',age=18,address='Germany';
变量命名规范 等同于C/C++
交换两个变量的值 
var temp;
temp=b;
b=a;
a=temp;
