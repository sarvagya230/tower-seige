class box
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.width=50
        this.height=80
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{restitution:0.3,isStatic:false})
        Matter.World.add(world,this.body)

    }
    display(color)
    {
        var pos = this.body.position 
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        if (color===a)
        {
            fill(156, 150, 250)
        }
        else 
        {

        fill(color)
        }
        rect(0,0,this.width,this.height)
        pop()


    }
}