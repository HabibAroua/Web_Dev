<?php
	$db = new PDO('mysql:host=localhost; dbname=tutos','root','');
	if(isset($_POST['nom'] , $_POST['message']) && !empty($_POST['nom'] && !empty($_POST['message']) )
	{
		
	}
	else
	{
		echo "<span class='error'>Veuillez compléter les champs</span>";
	}
?>