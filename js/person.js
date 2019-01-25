function personInfo(id,name,lname,age)
{
    this.id=id;
    this.name=name;
    this.lname=lname;
    this.age=age;
    this.changeAgePersone=changeAge;
    this.showInformation=showInfo;
    
    function changeAge(params)
    {
        this.age=params;
    }
    
    function showInfo()
    {
        document.write("id "+this.id," name : "+this.name+" last name : "+this.lname+" age : "+this.age+" ");
    }
}