class Paper{
    constructor(x,y,width,height,angle){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,20,20,options);
        this.width=50;
        this.height=50;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
    }
}