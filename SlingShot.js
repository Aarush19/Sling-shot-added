class SlingShot {
    constructor(){
        var options = {
            bodyA:bird.body,
            bodyB:k.body,
            length: 100,
            stifness: 0.04
        };
        this.bodyA=bird.body
        this.bodyB=k.body
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var A = this.bodyA.position
        var B = this.bodyB.position
        strokeWeight(5);
        line(A.x,A.y,B.x,B.y)
    }

}