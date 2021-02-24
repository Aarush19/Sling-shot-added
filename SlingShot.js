class SlingShot {
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            length: 100,
            stifness: 0.04
        };
        this.pointB=point2
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;   
    }
    display(){
        if(this.sling.bodyA){
        var A = this.sling.bodyA.position
        var B = this.pointB
        strokeWeight(5);
        line(A.x,A.y,B.x,B.y)
        }
    }

}