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

Day3 April 3rd B站网课 31--70
1.数据类型转换 数字型转字符串：
a)str = num.toString()
b)str = String(num)
c)str = 12 + ''隐形转换
2.字符串转化为数字（因为prompt输入的默认是string，如果需要做数学运算，必须要经历这一步）
a)parseInt()向下取整 单位不要
b)parseFloat()浮点型
c)Num(str)
d)'12'-0隐形转化
3.转化为bool
Boolean()
仅有0，NaN，undefined，''为false 其余都是true
值得提醒的是，'0'是True，因为不是空的
4.运算符和表达式 等同于C 在此不赘述
5.逻辑中断 了解就行
6.分支 和C一模一样
今天看似学的多，实际上和C基本完全一样 学到P143之前完全没有新东西。

Day4 April 4th B战网课71--95
JS循环和C循环95%一模一样 今天就是复习
大多数情况用for循环for(var i=1;i<=100;i++)
极少数用while和dowhile，while先判断条件后执行循环，dowhile先循环一次再判断条件
break：退出整个循环，continue：退出本次循环进行下一次
案例：注册案例 打印n行n列的星星/倒三角/乘法口诀表，使用嵌套循环（双循环）

Day5 April 5th B战网课96--133
JS数组和函数c
声明数组
1.new关键字 不常用 2.var arr =[]
剩下和C一模一样
声明函数
function func_name(num1,num2){}
剩下和C一模一样
今天纯复习，明天作用域和面向对象开学了。

Day6 April 6th B站网课 134--143
JS的作用域和与解析
1.作用域 局部变量只在函数内部其效果 全局变量 在整个js文件都起作用
每个函数都是一个作用域
2.作用域链 一层层向上查找
3.未用var定义的变量都是全局变量，即使他在函数内定义
4.预解析 函数的声明和变量的声明在作用域内提升到最优先执行的位置，不过变量声明和函数调用不提升。

Day7 April 7th B站网课 143--152
JS对象
声明对象
1. var obj={}不常用
2. var object = new Object();
3. 构造函数
4. function Star (){}
5. this.name=name;
6. this.age=age;
7. this.sing=function(song)
8. {
9.   console.log('song');
10. }
11. 使用构造函数new 注意构造函数首字母大写！
12. var zxy = new Star('zxy',18);
13. zxy.sing('ss');
使用对象
object.name
object.song=
