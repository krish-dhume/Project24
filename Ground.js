class Ground{
    constructor(x,y,width,height){
        var options={
            friction:0.5,
            density:0.5,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myworld,this.body)
        this.width=width;
        this.height=height;

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
    }
}