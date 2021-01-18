class Iron{
    constructor(x,y,width,height){
        var options={
            friction:3,
            restitution:0.3,
            density:2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myworld,this.body)
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}