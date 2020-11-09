class Dustbin
{
	constructor(x,y,width,height)
	{
	    var x1 ={
            isStatic:true
		}
		
		//this.wallThickness=20;
		
		//this.image=loadImage("bin.png")
        this.body=Bodies.rectangle(x,y,200,213,x1);
        this.width=200;
		this.height=213;
		this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
	}
	display()
	{
			var pos=this.body.position;
			push();
			translate(pos.x,pos.y);
	
			imageMode(CENTER);
			strokeWeight(4);
			
			stroke("green");
			//fill(255);
			image(this.image,0,0,this.width, this.height);
			//rect(pos.x,pos.y,this.width, this.height);
			pop();
						
	}

};