var thickness,wall;
var bullet,speed,weight;



function setup()
 
{
  createCanvas(1600,400);

  thickness=random(22,83)
  speed = random(223,9321)
  weight = random(30,52)

  bullet = createSprite(200,200,20,20);
  bullet.velocityX = speed; 
  bullet.shapecolor  = "white";

  wall = createSprite(1200,200, thickness, height/2)
  wall.shapeColor=color(80,80,80)
   
}

function draw() 
{
  background("black"); 

 if(hasCollided(bullet,wall))
 {
	 bullet.velocityX = 0;
	 var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
	
	 if(deformation>10)
	 {
		 wall.shapeColor = color(255,0,0);
	 }

	if(deformation<10)
	{
		wall.shapeColor = color(0,255,0);
	}
}
    drawSprites();
}


 function hasCollided( lbullet,lwall)
 {
	 bulletRightEdge=lbullet.x + lbullet.width;
	 wallLeftEdge = wall.x;

	 if (bulletRightEdge>=wallLeftEdge)
	 {
		 return true;
	 }
	 return false;
 }
