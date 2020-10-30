class launcher{
	
	constructor(body,anchor)
	{
		
		var options={
			 bodyA:body,			 
			pointB:anchor, 
			stiffness:0.03, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	
	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB;
     stroke("cyan");
			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}