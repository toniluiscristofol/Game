let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

// Creates DOM elements from a string representation
// buildDom
function buildDom(htmlString) {
  //tempDiv lo creamos para tener un elemento HTML (div) sobre el que transformar
  //nuestro string (htmlString) a formato HTML usando innerHTML
  //los strings que contengan el HTML deven tener UN SOLO ELEMENTO PADRE
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  //console.log(“tempDiv.children”, tempDiv.children)
  return tempDiv.children[0];
}

// -- splash screen
function createSplashScreen() {
  //para un correcto tabulado del string, tabular de la línea 2 hasta el final
  splashScreen = buildDom(`
  <main class="startGame">
  <header>
    <h1 class="h1">JUMPERS</h1>
    <button id="start">START</button>
  </header>
  <div class="selectPlayer">
  <div class="characterP1">
    <button id="pikachuP1">pikachu</button>
    <button id="bulbasaurP1">bulbasaur</button>
    <button id="charizarP1">charizar</button>
    <button id="charmanderP1">charmander</button>
  </div>
  <div class="characterP2">
  <button id="pikachuP2">pikachu</button>
  <button id="bulbasaurP2">bulbasaur</button>
  <button id="charizarP2">charizar</button>
  <button id="charmanderP2">charmander</button>
</div>
</div>
  </main>
    `);
  //Una vez creado el elemento HTML con la función buildDom, cargamos ese HTML en la página principal
  document.body.appendChild(splashScreen);

  //seleccionamos el botón que hemos creado y le creamos un eventListener para después crear el jugo
  const startButton = splashScreen.querySelector("button");
  let img2 = "" ;
  let img = "";
  let imgBullet = "";
  let imgBullet2 = "";
  let statement = "Please Select Player"
  startButton.addEventListener("click", () => {
      if(ready1 == true && ready2 == true){startGame(img, img2, imgBullet, imgBullet2)}
      else{
          console.log("please select player")
          return statement}
    });
        let pikachuP1 = document.querySelector("#pikachuP1")
        let bulbasaurP1 = document.querySelector("#bulbasaurP1")
        let charizarP1 = document.querySelector("#charizarP1")
        let charmanderP1 = document.querySelector("#charmanderP1")
        pikachuP1.addEventListener('click', () =>{
            img = "../styles/images/pikachu 3d.png"
            imgBullet = "../styles/images/pikachu 3d.png"
            ready1 = true;        
        })
        bulbasaurP1.addEventListener('click', () =>{
            img = "../styles/images//venusaur-mega 3d.png"
            imgBullet = "../styles/images/pikachu 3d.png"
            ready1 = true;
        })
        charizarP1.addEventListener('click', () =>{
            img = "../styles/images/charizard 3d R.png" 
            imgBullet = "../styles/images/charizard 3d R.png" 
            ready1 = true;
        })
        charmanderP1.addEventListener('click', () =>{
            img = "../styles/images/charizard.gif" 
            imgBullet = "../styles/images/charizard 3d R.png" 
            ready1 = true;
        })
    
       let pikachuP2 = document.querySelector("#pikachuP2")
       let bulbasaurP2 = document.querySelector("#bulbasaurP2")
       let charizarP2 = document.querySelector("#charizarP2")
       let charmanderP2 = document.querySelector("#charmanderP2")
       pikachuP2.addEventListener('click', () =>{
           img2 = "../styles/images/pikachu 3d.png"
           imgBullet2 = "../styles/images/pikachu 3d.png"
           ready2 = true;        
       })
       bulbasaurP2.addEventListener('click', () =>{
           img2 = "../styles/images//venusaur-mega 3d.png" 
           imgBullet2 = "../styles/images/charizard 3d R.png" 
           ready2 = true;
       })
       charizarP2.addEventListener('click', () =>{
           img2 = "../styles/images/charizard 3d R.png" 
           imgBullet2 = "../styles/images/charizard 3d R.png"
           ready2 = true;
       })
       charmanderP2.addEventListener('click', () =>{
           img2 = "../styles/images/charizard.gif" 
           imgBullet2 = "../styles/images/charizard.gif" 
           ready2 = true;
       })
}

function removeSplashScreen() {
  // remove() is the DOM method that removes the Node from the page
  splashScreen.remove();
  //console.log(splashScreen); //The value remains the same, but the code has been removed from the DOM.
}

// -- game screen
function createGameScreen() {
  //para un correcto tabulado del string, tabular de la línea 2 hasta el final

  
  gameScreen = buildDom(`
    <main class="game container">

        <div class="canvas-container">
            <canvas></canvas>
        </div>
    </main>
    `);
    

  document.body.appendChild(gameScreen);
  return gameScreen; //this we will explain later
}

function removeGameScreen() {
  gameScreen.remove();
}

// -- game over screen
function createGameOverScreen(player1Lives,player2Lives) {

    let finalResult = ''
    if (player1Lives > player2Lives){
              finalResult = `Player 1 Wins`
          }
          else { finalResult = `player 2 Wins`}

  gameOverScreen = buildDom(`
    <main>
        <h1>GAME OVER</h1>
        <p>player 1 lives = ${player1Lives}  Player 2 lives = ${player2Lives} ${finalResult} </span> </p>
        <button>Restart</button>
    </main>
    `);
    const button = gameOverScreen.querySelector("button");
    button.addEventListener("click", createSplashScreen)

    document.body.appendChild(gameOverScreen)
}
function removeGameOverScreen() {
    gameOverScreen.remove()
}

// -- Setting the game state - start or game over
function startGame(img, img2, imgBullet, imgBullet2) {
  removeSplashScreen();
  if(gameOverScreen){
      removeGameOverScreen();
  }
  createGameScreen();

  game = new Game(gameScreen);
  //game.gameScreen = gameScreen;
  game.start(img, img2, imgBullet, imgBullet2);
}

function endGame(player1Lives,player2Lives) {
 
  removeGameScreen();
 
  createGameOverScreen(player1Lives,player2Lives);
}

window.addEventListener("load", createSplashScreen);
