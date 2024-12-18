function siteTime(){
    window.setTimeout("siteTime()", 1000);
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth()+1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var t1 = Date.UTC(2024, 4, 12, 14, 0, 0);
    var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
    var diff = t2-t1;
    var diffDays = Math.floor((diff/days));
    document.getElementById("sitetime").innerHTML=diffDays;
}
siteTime();

document.writeln("<div class=\'SiteFooter\'>");
document.writeln("This site has been running for <span id=\'sitetime\'></span> days.");
document.writeln("<br>");
document.writeln("Copyright &copy; 2024 Li Yuhao. All Rights Reserved.");
document.writeln("</div>");