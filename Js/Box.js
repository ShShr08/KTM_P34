class Box{
    constructor(x, y, width, height){{}
        var options={
            restitution:0.8,
            friction:1.0,
            density:15,
    }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(ang);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("lightgreen");
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }
}