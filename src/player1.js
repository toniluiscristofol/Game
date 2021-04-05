class Player {
    constructor(canvas, lives) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
  

      this.lives = lives;
    
      this.size = 100;
    
      this.x = 50;
      this.y = this.canvas.height - this.size;
  
      this.direction = 0;
    
      this.speed = 10;
    }
  
    setDirection(direction) {

      if (direction === "up") {
        this.direction = -1;
      }

      else if (direction === "down") this.direction = 1;
    }
  
    updatePosition() {

      this.y += this.direction * this.speed;
    }

    handleScreenCollision() {
        const screenTop = this.canvas.height/2;
        const screenBottom = this.canvas.height;
    
        const playerTop = this.y;
        const playerBottom = this.y + this.size;
    
        if (playerBottom >= screenBottom) this.y = this.canvas.height - this.size;
        else if (playerTop <= screenTop) this.setDirection("down");
      }
  
    draw() {

        let img = document.createElement('img');
        img.src ="../styles/images/charizard copia.gif" 
        this.ctx.drawImage(img, this.x - 50, this.y-100, 200, 200);
     

    //   this.ctx.fillStyle = "#66D3FA";
    //   this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    removeLife() {
        this.lives -= 1;
      }

    didCollide(bullet) {
        //seleccionamos los 4 laterales del jugador
        const playerLeft = this.x;
        const playerRight = this.x + this.size;
        const playerTop = this.y;
        const playerBottom = this.y + this.size;
    
        //seleccionamos los 4 laterales del enemigo
        const bulletLeft = bullet.x;
        const bulletRight = bullet.x + bullet.size;
        const bulletTop = bullet.y;
        const bulletBottom = bullet.y + bullet.size;
    
        //comprobamos si el enemigo ha entrado dentro del jugador por cualquiera de los 4 lados
        const crossLeft = bulletLeft <= playerRight && bulletLeft >= playerLeft;
        const crossRight = bulletRight >= playerLeft && bulletRight <= playerRight;
        const crossBottom = bulletBottom >= playerTop && bulletBottom <= playerBottom;
        const crossTop = bulletTop <= playerBottom && bulletTop >= playerTop;
    
        //solo cuando 1 condición de verticalidad y 1 de horizontalidad se cumplen, podemos considerar que nuestros
        //cuadrados han colisionado
        if ((crossLeft || crossRight) && (crossTop || crossBottom)){
            return true;
        } else {
            return false;
        }
    
    
      }
    




  }
  