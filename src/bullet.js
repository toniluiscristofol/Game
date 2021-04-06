class Bullet {
    constructor(canvas, imgBullet) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.size = 40;
      this.x = 160;
      this.y = this.canvas.height - 90;
      this.imgBullet = imgBullet
      this.direction = 0;
      this.speed = 10;
    }

  
    updatePosition() {
        
    this.x += this.direction * this.speed;

    if (this.x > this.canvas.width) {
        this.x = 160;
        this.direction = 0};
          
    }

    draw() {

        let imgB = document.createElement('img');
        imgB.src = this.imgBullet
        this.ctx.drawImage(imgB, this.x, this.y, this.size, this.size);
       
    }

  
  }
  