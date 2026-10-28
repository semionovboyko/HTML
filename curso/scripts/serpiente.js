
const KEY_ENTER=13;
const KEY_LEFT=37;
const KEY_UP=38;
const KEY_RIGHT=39;
const KEY_DOWN=40;
const KEY_P=80;

const ARRIBA=0;
const DERECHA=1;
const ABAJO=2;
const IZQUIERDA=3;

var lienzo=null, canvas=null;
var body=[];
var food=new Rectangle(80,80,10,10,"#f00");
var wall=[];
wall.push(new Rectangle(100,50,10,10, "#999"));
wall.push(new Rectangle(100,100,10,10, "#999"));
wall.push(new Rectangle(200,50,10,10, "#999"));
wall.push(new Rectangle(200,100,10,10, "#999"));
var score=0;
var lastPress=null;
var dir=DERECHA;
var pause=false;
var gameover=true;
var numMediosCargados = 0;

var medios = [];
medios['iBody'] = new Image();
medios['iBody'].src='imgs/body.png';
medios['iBody'].addEventListener("load", cargaMedio, false);
medios['iFood'] = new Image();
medios['iFood'].src='imgs/fruit.png';
medios['iFood'].addEventListener("load", cargaMedio, false);
medios['iWall'] = new Image();
medios['iWall'].src='imgs/wall.png';
medios['iWall'].addEventListener("load", cargaMedio, false);
medios['aComer'] = new Audio();
medios['aMorir'] = new Audio();

if(canPlayOgg())
{
    medios['aComer'].src="sounds/chomp.ogg";
	medios['aMorir'].src='sounds/dies.ogg';
}
else
{
    medios['aComer'].src="sounds/chomp.m4a";
	medios['aMorir'].src='sounds/dies.m4a';
}

medios['aComer'].addEventListener("canplaythrough", cargaMedio, false);
medios['aMorir'].addEventListener("canplaythrough", cargaMedio, false);

if (!localStorage.recordAllTime)
	localStorage.recordAllTime = 0;

if (!sessionStorage.record)
	sessionStorage.record = 0;
	
function cargaMedio()
{
	numMediosCargados++;
}

function iniciar()
{
	canvas=document.getElementById('lienzo');
	lienzo=canvas.getContext('2d');
	
	if (numMediosCargados == Array.longitud(medios))
	{
		run();
		repaint();
	}
	else
	{
		cargando();
	}
} 

function cargando()
{
	if (numMediosCargados < Array.longitud(medios))
	{
		lienzo.fillStyle="#fff";
		lienzo.fillRect(0,0,canvas.width,canvas.height);
		lienzo.fillStyle="#0f0";
		lienzo.fillText('Cargando '+numMediosCargados+' de '+Array.longitud(medios),10,10);
		setTimeout(cargando, 100);
	}
	else
	{
		iniciar();
	}
}

function run()
{
	setTimeout(run,50);
    act();
}

function repaint(){
    requestAnimationFrame(repaint);
    paint(lienzo);
}

function act()
{
	if (!pause && !gameover)
	{
		for(var i=body.length-1;i>0;i--)
		{
			body[i].x=body[i-1].x;
			body[i].y=body[i-1].y;
		}
			
		if(lastPress==KEY_UP && dir != ABAJO)
			dir=ARRIBA;
		if(lastPress==KEY_RIGHT && dir!= IZQUIERDA)
			dir=DERECHA;
		if(lastPress==KEY_DOWN && dir!=ARRIBA)
			dir=ABAJO;
		if(lastPress==KEY_LEFT && dir!=DERECHA)
			dir=IZQUIERDA;
			
		if(dir==DERECHA)
			body[0].x+=10;
		if(dir==IZQUIERDA)
			body[0].x-=10;
		if(dir==ARRIBA)
			body[0].y-=10;
		if(dir==ABAJO)
			body[0].y+=10;
			
		if(body[0].x>=canvas.width)
			body[0].x=0;
		if(body[0].y>=canvas.height)
			body[0].y=0;
		if(body[0].x<0)
			body[0].x=canvas.width-10;
		if(body[0].y<0)
			body[0].y=canvas.height-10;

        for(var i=0;i<wall.length;i++)
		{
			var dirWall = random(4);

			if(dirWall==DERECHA)
				wall[i].x+=10;
			if(dirWall==IZQUIERDA)
				wall[i].x-=10;
			if(dirWall==ARRIBA)
				wall[i].y-=10;
			if(dirWall==ABAJO)
				wall[i].y+=10;
				
			if(wall[i].x>=canvas.width)
				wall[i].x=0;
			if(wall[i].y>=canvas.height)
				wall[i].y=0;
			if(wall[i].x<0)
				wall[i].x=canvas.width-10;
			if(wall[i].y<0)
				wall[i].y=canvas.height-10;
		}			
		
		if(body[0].intersects(food))
		{
			medios['aComer'].play();
			body.push(new Rectangle(0,0,10,10, "#0f0"));
			score++;
			food.x=random(canvas.width/10-1)*10;
			food.y=random(canvas.height/10-1)*10;
		}
		
        for(var i=2;i<body.length;i++)
		{
            if(body[0].intersects(body[i]))
			{
				medios['aMorir'].play();
                gameover=true;
            }
        }
		
        for(var i=0;i<wall.length;i++)
		{
            if(food.intersects(wall[i]))
			{
                food.x=random(canvas.width/10-1)*10;
                food.y=random(canvas.height/10-1)*10;
            }
            
			for (var j = 0;j < body.length;j++)
			{
				if(body[j].intersects(wall[i]))
				{
					medios['aMorir'].play();
					gameover=true;
				}
			}
       }
		
	}
	
    if(lastPress==KEY_P)
	{
        pause=!pause;
        lastPress=null;
    }
	
	if (gameover && lastPress==KEY_ENTER)
	{
		reset();
	}
}

function reset()
{
	if (score > parseInt(localStorage.recordAllTime))
		localStorage.recordAllTime = score;
	if (score > parseInt(sessionStorage.record))
		sessionStorage.record = score;
		
    score=0;
    dir=DERECHA;
	body.length=0;
	body.push(new Rectangle(40,40,10,10,"#0f0"));
	body.push(new Rectangle(0,0,10,10,"#0f0"));
	body.push(new Rectangle(0,0,10,10,"#0f0"));
    food.x=random(canvas.width/10-1)*10;
    food.y=random(canvas.height/10-1)*10;
	lastPress=null;	
    gameover=false;
}

function paint(lienzo){
	var gradiente=lienzo.createLinearGradient(0,0,0,canvas.height);
	gradiente.addColorStop(0.5, '#0000FF');
	gradiente.addColorStop(1, '#000000');
	lienzo.fillStyle=gradiente;
    lienzo.fillRect(0,0,canvas.width,canvas.height);
	
    for(var i=0;i<body.length;i++)
	{
        lienzo.drawImage(medios['iBody'], body[i].x, body[i].y);
    }
	
    lienzo.drawImage(medios['iFood'], food.x, food.y);

	for(var i=0,l=wall.length;i<l;i++)
	{
        lienzo.drawImage(medios['iWall'], wall[i].x, wall[i].y);
	}
	
	lienzo.fillStyle="#0f0";
	lienzo.fillText('Score: '+score,10,10);
	lienzo.fillText('Record sesión: '+sessionStorage.record,10,25);
	lienzo.fillText('Record Absoluto: '+localStorage.recordAllTime, 10, 40);
	
    if(pause || gameover)
	{
        lienzo.textAlign='center';
        if(gameover)
		{
            lienzo.fillText('GAME OVER',150,75);
			if (score > parseInt(localStorage.recordAllTime))
				lienzo.fillText('NEW RECORD ALL TIME' + score,150,100);
			else
			{
				if (score > parseInt(sessionStorage.record))
					lienzo.fillText('NEW RECORD' + score,150,100);
			}
		}
        else
            lienzo.fillText('PAUSE',150,75);
        lienzo.textAlign='left';
    }
}

function Rectangle(x,y,width,height,color)
{
	this.x=(x==null)?0:x;
	this.y=(y==null)?0:y;
	this.width=(width==null)?0:width;
	this.height=(height==null)?this.width:height;
	this.color = (color==null)?"#000":color;
}
    
Rectangle.prototype.intersects=function(rect)
{
	if(rect!=null)
	{
		return	(this.x<rect.x+rect.width&&
				this.x+this.width>rect.x&&
				this.y<rect.y+rect.height&&
				this.y+this.height>rect.y);
	}
}
 
Rectangle.prototype.fill=function(lienzo)
{
	if(lienzo!=null)
	{
		lienzo.fillStyle=this.color;
		lienzo.fillRect(this.x,this.y,this.width,this.height);
	}
}
    
Rectangle.prototype.drawImage=function(lienzo, img)
{
	if(img.width)
		lienzo.drawImage(img,this.x,this.y);
	else
		lienzo.strokeRect(this.x,this.y,this.width,this.height);
}

window.requestAnimationFrame=(function()
{
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        function(callback)
		{
			window.setTimeout(callback,17);
		};
})(); 

function canPlayOgg()
{
    var aud=new Audio();
	
    if(aud.canPlayType('audio/ogg').replace(/no/,''))
        return true;
    else
        return false;
}

Array.longitud = function(obj)
{
      return Object.getOwnPropertyNames(obj).length - 1;
}

function random(max)
{
    return Math.floor(Math.random()*max);
}

window.addEventListener("load", iniciar, false);
document.addEventListener('keydown', function(evt)
{
    lastPress=evt.keyCode;
}, false);