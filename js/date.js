function time()
{
    var myDay=new Date();
    document.write("The date is "+myDay);
    var myDate=myDay.getDate();
    var myMonth=myDay.getMonth();
    var myYear=myDay.getFullYear();
    document.write("<br>");
    document.write("myDay : "+myDate);
    document.write("<br>");
    document.write("myMonth : "+myMonth);
    document.write("<br>");
    document.write("MyYear : "+myYear);
}
time();