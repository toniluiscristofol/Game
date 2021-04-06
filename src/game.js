class Game {
    constructor(gameScreen) {
      this.canvas = null;
      this.ctx = null;
      this.player = null;
      this.player2 = null;
      this.bullet = null;
      this.bullet = null;
      //this.img = null;//
      this.gameIsOver = false;
      this.gameScreen = gameScreen;
      this.score = 0;
      this.livesElement = undefined;
      this.scoreElement = undefined;
 
    }
  

    start(img, img2, imgBullet, imgBullet2) {
  
      this.livesElement = this.gameScreen.querySelector(".lives .value");
      this.lives2Element = this.gameScreen.querySelector(".lives2 .value");
      this.scoreElement = this.gameScreen.querySelector(".score .value");
      this.canvas = this.gameScreen.querySelector("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
      this.containerWidth = this.canvasContainer.clientWidth;
      this.containerHeight = this.canvasContainer.clientHeight;
      this.canvas.setAttribute("width", this.containerWidth);
      this.canvas.setAttribute("height", this.containerHeight);

      this.player = new Player(this.canvas, 5, img);
      this.player2 = new Player2(this.canvas, 5, img2);
    //   this.player = new Player(this.canvas, 5, 5);
    //   this.player2 = new Player(this.canvas, 5, 550 );
      this.bullet = new Bullet(this.canvas, imgBullet);
      this.bullet2 = new Bullet2(this.canvas, imgBullet2);
    //   this.bullet = new Bullet(this.canvas, 160, 10);
    //   this.bullet2 = new Bullet(this.canvas, 565, -10);

      function handleKeyDown(event) {
        if (event.key === "a") {
            this.player.setDirection("up") 
        }
       
        if (event.key === "d") {
            this.player.x += 10; 
        }

        if (event.key === "z") {
            this.player.x -= 10; 
        }
        
    
        if (event.key === "ArrowUp") {  
            this.player2.setDirection("up")
         };
         if (event.key === "s"){this.bullet.direction = 1;
        }
        if (event.key === "ArrowLeft"){this.bullet2.direction = 1;}
        
      }

      
      const boundHandleKeyDown = handleKeyDown.bind(this);
      document.body.addEventListener("keydown", boundHandleKeyDown);
  
      this.startLoop();
    }
    
  
    startLoop() {
      
      const loop = () => {
        //1. ACTUALIZAR los estados del jugador y los enemigos
        // -- 1.0 Nuestro jugador ya esta creado en la función start
        // -- 1.1 Crear enemigos en posiciones aleatorias con una frecuencia aleatoria
        this.checkCollisions();
        // -- 1.2 Comprobar si el jugador ha colisionado con algún enemigo
        // -- 1.3 Actualizar la posición del jugador
        this.player.updatePosition();
        this.player.handleScreenCollision();
        this.player2.updatePosition();
        this.player2.handleScreenCollision();
        this.bullet.updatePosition();
        this.bullet2.updatePosition();
      


        //2. LIMPIAR CANVAS
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //3. DIBUJAR DE NUEVO EL CANVAS CON LAS POSICIONES ACTUALIZADAS EN EL PASO 1
        this.player.draw();
        this.player2.draw();
        this.bullet.draw();
        this.bullet2.draw();
      
        //4. ROMPER EL LOOP EN CASO DE GAME OVER (LIVES <= 0)
        if (!this.gameIsOver) {
          window.requestAnimationFrame(loop);
        }
        //5. ACTUALIZAR PUNTUACIÓN Y VIDAS que mostramos por pantalla (HTML)
        this.updateGameStats();
      };
      loop();
    }

    checkCollisions() {
        //this.enemies contiene todos los enemigos que hemos ido creando durante el juego.
        //iteramos sobre este array para comprobar si cada uno de los enemigos ha colisionado con el player
        
          if (this.player.didCollide(this.bullet2)) {
            this.player.removeLife();
            console.log("lives", this.player.lives);
        
        
    
            //mover el enemigo fuera de la pantalla
            this.bullet2.x = -40;

    
            if (this.player.lives === 0) {
              this.gameOver();
            }
            
          }

          if (this.player2.didCollide(this.bullet)) {
            this.player2.removeLife();
            console.log("lives", this.player2.lives);
            
            this.bullet.x = 1400;

            if (this.player2.lives === 0) {
                this.gameOver();
              }

        }};
      
        gameOver() {
            this.gameIsOver = true;
            endGame(this.player.lives, this.player2.lives);
          }
        // updateGameStats() {
            
        //     this.livesElement.innerHTML = this.player.lives;
        //     this.lives2Element.innerHTML = this.player2.lives;
        //     this.scoreElement.innerHTML = this.score;
        //   }
    
   
  }