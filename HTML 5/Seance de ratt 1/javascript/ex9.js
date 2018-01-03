function draw_leg(fraction) 
{
    dctx.lineTo(center_x + length * Math.sin(2 * Math.PI * fraction),center_y - length * Math.cos(2 * Math.PI * fraction));
}

function init() 
{
    var canvas = document.getElementById("clockface");
    // Les variables suivantes sont créées en tant qu'éléments globaux, d'autres fonctions peuvent donc facilement y accéder.
    dctx = canvas.getContext('2d');
    dctx.fillStyle = "noir";
    center_x = 100; center_y = 100;
    length = 100; show_hands();
}

// Une aiguille est dessinée comme un triangle isocèle à partir du centre du cadran de l'horloge jusqu'au bord de celui-ci.
function show_hand(fraction, width) 
{
    dctx.beginPath();
    dctx.moveTo(center_x, center_y);
    draw_leg(fraction - width);
    draw_leg(fraction + width);
    dctx.fill();
}

// Effacer tout ce qui est déjà présent dans la zone qui représente le cadran de l'horloge.
function show_hands() 
{
    dctx.clearRect(0, 0, 200, 200);
	var now = new Date();
    seconds = now.getSeconds();
    minutes = now.getMinutes() + seconds / 60;
    hours = now.getHours() + minutes / 60;
    // La deuxième aiguille est la plus « petite » des trois.
    show_hand(seconds / 60, 0.002);
    show_hand(minutes / 60, 0.005);
    // L'aiguille des heures est deux fois plus large que celle des hand.
    show_hand(hours / 12, 0.01); var rate = 1000;
    setTimeout(show_hands, rate);
}