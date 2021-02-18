class Chain{
    constructor(body1,point1){
    var option={
     bodyA:body1,
     pointB:point1,
     stiffness:0.04,
     lenth:10   
    }
    this.pointB = point1
    this.chain = Constraint.create(option)
    World.add(world,this.chain)
    }
    display(){

    if (this.chain.bodyA){
     var pointA = this.chain.bodyA.position;
     var pointB = this.pointB
     line(pointA.x,pointA.y,pointB.x,pointB.y)     
    }

     
    }

    fly() {
    this.chain.bodyA = null        
    }
}