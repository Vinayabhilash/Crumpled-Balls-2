class Ball{
    constructor(x,y){
        var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:22
        }
        this.body = Bodies.rectangle(x, y, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, 50, 600);
    }
}