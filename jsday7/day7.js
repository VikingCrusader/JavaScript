//1.对象字面量创建对象
var obj = {} //创建空的对象
var obj1 = {
    uname: '张三丰',
    age: '18',
    sex: '男',
    sayHi: function () {
        console.log('Hi');
    }
}
//调用对象属性 变量名.属性名
console.log(obj1.uname);
//调用属性还有一种方法 对象名['属性名'] 记得加引号
console.log(obj1['age']);
obj1.sayHi();

//狗对象
var dog = {
    name: 'coco',
    type: 'alaska',
    age: '5',
    color: 'pink',
    bark: function () {
        console.log('wolf');
    },
    showfilm: function () {
        console.log('showing');
    }
}

console.log(dog.age);
dog.bark();
dog.showfilm();
console.log(dog.name);

//new Object创建对象
var obj2 = new Object();
obj2.uname = 'zhangsanfeng';
obj2.age = 18;
obj2.sex = 'male';
obj2.sayHi = function () {
    console.log('Hello World!');
}
console.log(obj2.uname);
obj2.sayHi();

//鸣人对象
var mingren = new Object();
mingren.name = 'mingren';
mingren.sex = 'male';
mingren.age = 19;
mingren.skill = function () {
    console.log('影分身术');
}
console.log(mingren.name);
console.log(mingren['age']);
console.log(mingren['sex']);
mingren.skill();

//创建四大天王的对象
function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (song) {
        console.log(song);
    }
}
var ldh = new Star('刘德华', 18, '男');//调用
console.log(typeof ldh);
console.log(ldh.name);
console.log(ldh.sex);
console.log(ldh['age']);
ldh.sing('歌名');
var zxy = new Star('张学友', 22, '男');
console.log(zxy.name);
console.log(zxy.sex);
zxy.sing('换个试试');

function Hero(name, type, blood, attack) {
    this.name = name;
    this.type = type;
    this.blood = blood;
    this.attack = attack;
    this.voice = function (taici) {
        console.log(taici);
    }
}
var lianpo = new Hero('lianpo', 'force', '500', 'unranged');
var houyi = new Hero('houyi', 'marksman', '100', 'ranged');
console.log(houyi.attack);
lianpo.voice('猎杀时刻!')
