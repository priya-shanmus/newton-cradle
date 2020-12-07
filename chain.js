class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:2,
            length:100

        }
        
        this.pointB = pointB
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
      var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y-20,pointB.x,pointB.y);

    }
}