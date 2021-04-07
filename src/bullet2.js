class Bullet2 {
    constructor(canvas, imgBullet2) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.size = 70;
      this.x = 675;
      this.y = this.canvas.height - 240;
      this.imgBullet2 = imgBullet2
      this.direction = 0;
      this.speed = -10;
    }

  
    updatePosition() {
        
        
    this.x += this.direction * this.speed;
    if (this.x < 0) {
        this.x = 675;
        this.direction = 0};
          
    }
  
    draw() {

        let imgB2 = document.createElement('img');
        imgB2.src = this.imgBullet2
        this.ctx.drawImage(imgB2, this.x, this.y, this.size, this.size);
    }

    
  }
  