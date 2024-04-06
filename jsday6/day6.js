var num = 10; //全局变量
function fn() {
    var num = 20;//局部变量 
    console.log(num);
    function fun() {
        var num = 10;
        console.log(num);
    }
    fun();
}
fn();