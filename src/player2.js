

class Player2 {
    constructor(canvas, lives, img2) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.lives = lives;
      this.size = 200;
      this.x = 900;
      this.y = this.canvas.height - this.size -120;
      this.img2 = img2;
      this.direction = 0;
      this.speed = 10;
    }
  
    setDirection(direction) {
     
      if (direction === "up" && this.y ==this.canvas.height - this.size -120) {
        this.direction = -1;
      }

      else if (direction === "down") this.direction = 1;
    }
  
    updatePosition() {
      // esto actualiza la posición de nuestro jugador
      this.y += this.direction * this.speed;
    }

    handleScreenCollision() {
        const screenTop = this.canvas.height/4;
        const screenBottom = this.canvas.height -120;
    
        const playerTop = this.y;
        const playerBottom = this.y + this.size;
    
        if (playerBottom >= screenBottom) this.y = this.canvas.height - this.size -120;
        else if (playerTop <= screenTop) this.setDirection("down");
      }
  
  
    
    draw() {

        let imgP2 = document.createElement('img');
        imgP2.src = this.img2;
        console.log(imgP2.src)
        this.ctx.drawImage(imgP2, this.x, this.y, this.size, this.size);
        this.ctx.font = "50px Arial"
        this.ctx.fillText(this.lives, this.x +50, this.y)
      
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
  