// 简易ATM
var balance = 100;
var flag = 0;
var opreation;
while (flag == 0) {
    opreation = prompt('请输入您要的操作\n1.存钱\n2.取钱\n3.显示余额\n4.退出\n');
    switch (Number(opreation)) {
        case 1:
            var input = prompt('请输入要存的钱数');
            balance = balance + Number(input);
            alert('存钱成功！您的余额现在是' + balance + '');
            break;
        case 2:
            var output = prompt('请输入要取的钱数');
            balance = balance - Number(output);
            alert('取钱成功！您的余额现在是' + balance + '');
            break;
        case 3:
            alert('您的余额现在是' + balance + '');
            break;
        case 4:
            flag = 1;
            alert('退出ATM');
            break;
    }
}