class Bullet {
    constructor(canvas, imgBullet) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.size = 70;
      this.x = 400;
      this.y = this.canvas.height - 240;
      this.img = new Image();
      this.img.src = imgBullet
      this.direction = 0;
      this.speed = 10;
      this.frames = 6;
      this.spriteWidth = 3072 ;
      this.spriteHeight = 512;
      this.framesIndex = 0;
    }

  
    updatePosition() {
        
    this.x += this.direction * this.speed;

    if (this.x > this.canvas.width) {
        this.x = 400;
        this.direction = 0};
          
    }

    draw(framesCounter) {

     
    
        //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    

    this.ctx.drawImage(
        this.img,
        this.framesIndex * Math.floor(this.spriteWidth / this.frames),
        0,
        Math.floor(this.spriteWidth / this.frames),
        this.spriteHeight,
        this.x,
        this.y,
        this.size,
        this.size
      )
      this.animate(framesCounter)

    
    
}
  

    animate(framesCounter){
      if(framesCounter % 10 === 0) {
        this.framesIndex++
  
        if(this.framesIndex > 5) this.framesIndex = 0;
      }
    
    }


    
  
  

}
  