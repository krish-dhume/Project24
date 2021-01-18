class Sand{
    constructor(x,y){
        var options={
            friction:5.1,
            restitution:0.7,
            density:1
            
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(myworld,this.body)
        this.radius=8;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        fill("red");
        stroke("black");
        strokeWeight(4);
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius);
        pop()
    }
}