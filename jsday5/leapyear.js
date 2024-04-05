function leapyear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
}

var year = prompt('请输入年份');
if (leapyear(year) == true) {
    alert('是闰年');
}
else {
    alert('不是闰年');
}
