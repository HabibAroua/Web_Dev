function init() 
{
    var paragraph_object = document.getElementById('paragraph');
    message = "Notez que le titre de cette page est " +
    document.title + ".";
    paragraph_object.innerHTML = message;
}