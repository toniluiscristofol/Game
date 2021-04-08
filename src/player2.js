

class Player2 {
    constructor(canvas, lives, img2) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.lives = lives;
      this.size = 130;
      this.x = 750;
      this.y = this.canvas.height - this.size -180;
      this.img2 = new Image();
      this.img2.src = img2
      this.direction = 0;
      this.speed = 10;
      this.sound = new Sounds();
    }
  
    setDirection(direction) {
     
      if (direction === "up" && this.y ==this.canvas.height - this.size -180) {
        this.direction = -1;
        this.sound.playJump2();
      }

      else if (direction === "down") this.direction = 1;
    }
  
    updatePosition() {
      // esto actualiza la posición de nuestro jugador
      this.y += this.direction * this.speed;
    }

    handleScreenCollision() {
        const screenTop = this.canvas.height/6;
        const screenBottom = this.canvas.height -180;
    
        const playerTop = this.y;
        const playerBottom = this.y + this.size;
    
        if (playerBottom >= screenBottom) this.y = this.canvas.height - this.size -180;
        else if (playerTop <= screenTop) this.setDirection("down");
      }
  
  
    
    draw() {

        this.ctx.font = "200px karma Future"
        this.ctx.fillText(this.lives, 820, 200)
    
        this.ctx.drawImage(this.img2, this.x, this.y, this.size, this.size);
       
      
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
        const crossLeft = bulletLeft <= playerRight && bulletLeft >= playerLeft; //CANVIA
        const crossRight = bulletRight >= playerLeft && bulletRight <= playerRight; //CANVIA
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
  