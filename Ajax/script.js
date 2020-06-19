$(document).ready
(
	function()
	{
		$("button").click
		(
			function()
			{
				var name = $('#id_name').val();
				$.ajax
				(
					{
						type: 'POST',
						url: "http://127.0.0.1/Ajax/test.php",
						data: {'name': name},
						success: 
						function(result)
						{
							alert(result);
						}
					}
				);
			}
		);
	}
);