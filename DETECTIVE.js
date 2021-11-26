class detective{
    constructor(x,y){
        var options ={
            'restitition':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50
        this.image = loadImage("detective.png");
        World.add(world,this.body);
    }

    display(){

        if(keyCode === 68){
            this.body.position.x+=3;
        }
        
        if(keyCode === 65){
            this.body.position.x-=3;
        }

        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}