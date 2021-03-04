class Food{

    constructor(x,y){
        var foodStock;
       
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("Images/Milk.png");
        this.width = 20;
        this.height = 50;
        World.add(world, this.body);



    }

    addFood(){
        if(add.mousePressed){
          foodStock=foodstock+this.body
        }
    }

    display(){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
}