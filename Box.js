class Box{
    //properties
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            density:0.5,
            friction:1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height=height;
        World.add(world,this.body);

    }

    //function
    display(){
        //namespacing
        var pos = this.body.position;
        var angle = this.body.angle;
        //to push changes from this point
        push();
        //it will translate the x and y position
        translate(pos.x,pos.y);
        //it will rotate to angle decided by physics engine
        rotate(angle);
        strokeWeight(6);
        stroke("white");
        //to give color to created objects
        fill("black");
        //to position x and y of rectangle to center
        rectMode(CENTER);
        //to display the rectangle
        rect(0,0,this.width,this.height);
        //to end the changes from the certain point
        pop();
    }
}