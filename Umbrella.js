class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.bestman = loadImage("bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }
    remove(){ 
        var pos = this.umbrella.position;
        World.remove(world,this.umbrella);
     }
   
         display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
       

        if(frameCount >= 200){
            image(this.bestman,pos.x,pos.y+70,150,230); 
        }
        else{
            image(this.image,pos.x,pos.y+70,300,300);
        }
    }
}
