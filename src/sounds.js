class Sounds {

    constructor(){
        this.jump = new Audio("styles/images/sounds/salto.wav")
        this.lives = new Audio("styles/images/sounds/vides.wav")
        this.jump2 = new Audio("styles/images/sounds/salto2.wav")
        this.gameover = new Audio("styles/images/sounds/end.wav")
    }
    playJump(){

        this.jump.currentTime = 0;
        this.jump.play();
    }

    playJump2(){

        this.jump2.currentTime = 0;
        this.jump2.play();
    }



    playLives(){

        this.lives.currentTime = 0;
        this.lives.play();
    }

    playGameOver(){

        this.gameover.currentTime = 0;
        this.gameover.play();

    }
    

}