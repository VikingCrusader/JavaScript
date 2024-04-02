# JavaScript
Day 1 April 1ST B站网课1-20
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

Day2 April 2ND B站网课21-30
1.数据类型 number string boolean null undefined
2.八进制 开头0 十六进制 开头0x
3.isNaN方法 判断是不是非数字 isNaN(12) = false
4.引号嵌套 外双内单 外单内双
5.换行\n 缩进\t 注意写在引号里面
6.字符串长度length方法 str.length
7.字符串拼接+ 可以拼接任何，数字甚至undefined
8.typeof xxx 返回变量类型
