class Stone {
    constructor(x,y){
        var opt = {
            isStatic : false,
            friction : 0,
            restitution : 1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,40,opt);
        World.add(world,this.body)
        this.image = loadImage("Images/stone.jpeg");
    }
    display(){
        
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,40,40);
        //rectMode(CENTER)
      //rect(this.body.position.x,this.body.position.y,40,40);
    }
}