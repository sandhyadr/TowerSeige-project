class Block {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.5,
        friction: 0.0,
        //  isStatic: false
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.visibility = 225;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    /*attach(body){
      this.sling.bodyA = body;
  }*/

    display(color){
     // this.body.visible = true;

      /*if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }*/

      
      if(this.body.speed < 4){
              fill(color);
              var angle= this.body.angle;
              var pos = this.body.position;
              push();
              translate(pos.x,pos.y);
              rotate(angle);
              rectMode(CENTER);
              rect(0, 0, this.width, this.height);
              pop();
       }
       else{
            
              //this.body.visible = false;
              World.remove(world, this.body);
              
              push();
              fill(color);
              this.visiblity = this.visiblity - 5;
              // tint(255,this.Visiblity);
              pop();
         
       }
    }
  }