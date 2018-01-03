function acknowledge(file_handle) 
{
    var size = file_handle.size;
    var fname = file_handle.name;
    var message = "Vous avez sélectionné le fichier '" +
    fname + "'. Il semble être reconnaissable image, total " + size + " taille en octets."; alert(message);
}

function complain(fname) 
{
    var message = "Le fichier nommé '" + fname + "' ne semble pas avoir une extension acceptable.";
    alert(message);
}

function handle_file_selection(item) 
{
    var f = item.files[0];
    var fname = f.name;
    var last_index = fname.lastIndexOf('.');
    if (last_index == -1)
	{ 
        complain(fname); 
		return;
    }
    var ext = fname.substr(last_index + 1);
    if (ext.toLowerCase() in {'gif': '','jpg' : '','png': '','tif': ''})
    {
        acknowledge(f);
    } 
	else 
	{
        complain(fname);
    }
}