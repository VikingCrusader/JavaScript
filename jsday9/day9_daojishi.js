function daojishi() {
    var now = new Date();
    var ddl = new Date('2024,4,16,00:00:00');
    var nowms = now.getTime();
    var ddlms = ddl.getTime();
    var distance = ddlms - nowms;
    console.log(distance);
    var days = Math.floor(distance / 86400000);
    console.log(days);
    var hours = Math.floor((distance - days * 86400000) / 3600000);
    console.log(hours);
    var minutes = Math.floor((distance - days * 86400000 - hours * 3600000) / 60000);
    console.log(minutes);
    var seconds = Math.floor((distance - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000);
    console.log(seconds);
    console.log('现在距离2024年4月16日00:00:00还有:' + days + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒！');
}
daojishi();