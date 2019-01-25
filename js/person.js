function personInfo(id,name,lname,age)
{
    this.id=id;
    this.name=name;
    this.lname=lname;
    this.age=age;
    this.changeIdPerson=changeId;
    this.changeNamePerson=changeName;
    this.changeLnamePerson=changeLname;
    this.changeAgePerson=changeAge;
    this.showInformation=showInfo;
    this.writeMessageByPerson=writeMessage;
    
    function changeId(params)
    {
        this.id=params;    
    }
    
    function changeName(params)
    {
        this.name=params;
    }
    
    function changeLname(params)
    {
        this.lname=params;
    }
    
    function changeAge(params)
    {
        this.age=params;
    }
    
    function showInfo()
    {
        document.write("id "+this.id," name : "+this.name+" last name : "+this.lname+" age : "+this.age+" ");
    }
    
    function writeMessage(message)
    {
        document.write("Your message is : <br>"+message);
    }
};