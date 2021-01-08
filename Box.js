class Box{
    constructor(x,y,w,h){

        this.body = Matter.Bodies.rectangle(x,y,w,h,{density: 0.5,restitution:1});
        this.length=h;
        this.width=w;
        Matter.World.add(abWorld,this.body);

    }

    display(){
        fill("white")
        rect(this.body.position.x,this.body.position.y,this.width,this.length);

    }

    printText(){

        text(" bosx is created at",100,100);
    }







}