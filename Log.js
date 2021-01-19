class Log{
    //properties
    constructor(x,y,height,angle){
        var options = {
            restitution:0.2,
            density:0.5,
            friction:2.5
        }

        this.body = Bodies.rectangle(x,y,15,height,options);
        this.width= 15;
        this.height=height;
        //to set angle of the log using body class of matter
        Matter.Body.setAngle(this.body,angle);
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
        
        //to give color to created objects
        fill("cyan");
        //to position x and y of rectangle to center
        rectMode(CENTER);
        //to display the rectangle
        rect(0,0,this.width,this.height);
        //to end the changes from the certain point
        pop();
    }
}