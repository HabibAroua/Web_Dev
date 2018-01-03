function move_paragraph()
{
    next = current + "px";
    current += 1;
    if (current > 300) 
	{
        current = 0;
    }
    paragraph.style.left = next;
    var rate = document.getElementById("rate").value;
    setTimeout(move_paragraph,rate);
}

function init() 
{
    paragraph = document.getElementById("original");
    paragraph.style.position = "absolute";
    current = 0;
    move_paragraph();
}

function show_image(src, width, height, alt)
{
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
// Ajoute à la balise <body> document.body.appendChild(img);
}