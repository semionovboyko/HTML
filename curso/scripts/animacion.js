window.addEventListener("load", iniciar, false);

function iniciar()
{
	var chincheta1 = document.querySelector("article:nth-child(1) div");
	
	chincheta1.className="chincheta1";
	PrefixedEvent(chincheta1, "AnimationEnd", chincheta1Fin);
}

function chincheta1Fin()
{
	var movil1 = document.querySelector("article:nth-child(1)");
	
	movil1.className="article1";
	PrefixedEvent(movil1, "AnimationEnd", movil1Fin);
}

function movil1Fin()
{
	var chincheta2 = document.querySelector("article:nth-child(2) div");
	
	chincheta2.className="chincheta2";
	PrefixedEvent(chincheta2, "AnimationEnd", chincheta2Fin);
}

function chincheta2Fin()
{
	var chincheta3 = document.querySelector("article:nth-child(3) div");
	
	chincheta3.className="chincheta3";
	PrefixedEvent(chincheta3, "AnimationEnd", chincheta3Fin);
}

function chincheta3Fin()
{
	var movil3 = document.querySelector("article:nth-child(3)");
	
	movil3.className="article3";
}

var pfx = ["webkit", "moz", "MS", "o", ""];

function PrefixedEvent(element, type, callback) 
{
	for (var p = 0; p < pfx.length; p++) 
	{
		if (pfx[p] == "" || pfx[p] == "o") 
			type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}