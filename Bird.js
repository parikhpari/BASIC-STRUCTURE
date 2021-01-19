class Bird{
    //properties
    constructor(x,y){
        var options = {
            restitution:0.8,
            density:1,
            friction:1
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width= 50;
        this.height= 50;
        World.add(world,this.body);

    }

    //function
    display(){
        //namespacing
        var pos = this.body.position;

        //to move bird with the mouse
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        //to push changes from this point
        push();
        //it will translate the x and y position
        translate(pos.x,pos.y);
        //it will rotate to angle decided by physics engine
        rotate(angle);
        
        //to give color to created objects
        fill("red");
        //to position x and y of rectangle to center
        rectMode(CENTER);
        //to display the rectangle
        rect(0,0,this.width,this.height);
        //to end the changes from the certain point
        pop();
    }
}