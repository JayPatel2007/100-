class Ball {
    constructor(x,y,radius){
        var options ={restitution:true}
        this.body =Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius=radius
    }

    show(){
        ellipse(this.body.position.x, this.body.postion.y,this.radius)
    }
    
}