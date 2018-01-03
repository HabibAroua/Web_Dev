function move_paragraph() 
{
    next = current + "px";
    current += 1;
    if (current > 300) 
	{
        current = 0;
    }
    paragraph.style.left = next;
    // Pause de 18 millisecondes avant la prochaine étape.
    var rate = 18;
    setTimeout(move_paragraph,rate);
}
function init()
{
    paragraph =document.getElementById("original");
    paragraph.style.position ="absolute";
    current = 0;
    move_paragraph();
}