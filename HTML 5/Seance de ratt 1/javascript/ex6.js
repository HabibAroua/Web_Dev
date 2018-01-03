function validate() 
{
    var value = document.getElementById("input1").value;
    if (isNaN(value)) 
	{
        modifier = "non ";
    } 
	else 
	{
        modifier = "";
    }
    var report = "Vous avez saisi '" + value + "'; il s'agit " + modifier + "d'un nombre valide.";
    alert(report);
}