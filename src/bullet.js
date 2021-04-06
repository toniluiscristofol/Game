class Bullet {
    constructor(canvas, imgBullet) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.size = 70;
      this.x = 500;
      this.y = this.canvas.height - 240;
      this.imgBullet = imgBullet
      this.direction = 0;
      this.speed = 10;
    }

  
    updatePosition() {
        
    this.x += this.direction * this.speed;

    if (this.x > this.canvas.width) {
        this.x = 500;
        this.direction = 0};
          
    }

    draw() {

        let imgB = document.createElement('img');
        imgB.src = this.imgBullet
        this.ctx.drawImage(imgB, this.x, this.y, this.size, this.size);
       
    }

  
  }
  