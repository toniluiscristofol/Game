class Bullet2 {
    constructor(canvas, lives) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");

      this.size = 40;
      this.x = 600;
      this.y = this.canvas.height - 90;
      this.direction = 0;
      this.speed = -10;
    }

  
    updatePosition() {
        
        
    this.x += this.direction * this.speed;
    if (this.x < 0) {
        this.x = 600
        this.direction = 0};
          
        
    }


    
  
    draw() {

        
        
        let img = document.createElement('img');
        img.src ="../styles/images/kisspng-vector-graphics-clip-art-image-flame-fire-cropped-logo-png-www-kaminipechi24-ru-5bfe5ea4a6ba40.0738748315433970286829.png" 
        this.ctx.drawImage(img, this.x -50, this.y, this.size, this.size );
        // //this.ctx.clearRect = (0 , 0, this.canvas.width, this.canvas.height)
        // this.ctx.fillStyle = "#FFFF00"
        // this.ctx.fillRect(this.x, this.y, this.size, this.size);
        // this.x =+ 1
        // timeoutId = setTimeout(() => {
        //     draw();
        //   }, 20);//
    }

    
  }
  