class objetos{
    constructor(x,y){
        var options ={
            'restitition':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,30,30,options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("lupa.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);


    }
}