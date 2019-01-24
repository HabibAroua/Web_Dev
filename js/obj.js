person=
{
    name: "Habib" ,
    familyName: "AROUA",
    age: 24
};
document.write("\n all information : "+person.name+" "+person.familyName+" "+person.age);

var cat =new Object();
cat.name="Tananananana";
cat.age="1";
cat.color="white";
document.writeln("<br>");
document.write("cat information "+cat.name+" "+cat.age+" "+cat.color);

function myEmploye(id,name, lname,age,dept,salary)
{
    this.id=id;
    this.name=name;
    this.lname=lname;
    this.age=age;
    this.salary=salary;
}

emp=new myEmploye(1,"Habib","Aroua",24,"Programmer",900000);
document.write("<br>");
document.write("all information employee : "+emp.id+" "+emp.name+" "+emp.lname+" "+emp.salary);