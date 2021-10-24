const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let position = 0;
let = isJumping = false;
let player_score = 0;

function handleKeyUp(event){
    if (event.keyCode === 32){
        if (!isJumping){
            jump();
        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(()=>{

        if(position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(()=> {
                if (position <=0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position = position -= 20;
                dino.style.bottom = position + 'px';
            },20)

        } else {
            position = position += 20;
            dino.style.bottom = position + 'px';
        }
    },20)
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random()*6000;

    cactus.classList.add('cactus');
    cactus.style.left= 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if (cactusPosition < -60) {
            player_score++;
            console.log(player_score);
            speed();
            clearInterval(leftInterval);
            background.removeChild(cactus);

        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 40  ) {
             clearInterval(leftInterval);
             document.body.innerHTML =  `<h1 class='gameover'> Fim de Jogo </h1> <h2 class='score'> Score: ${player_score} </h2>`;

        } else {
            cactusPosition = cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20);

    setTimeout(createCactus, randomTime);

}

createCactus();
document.addEventListener('keyup', ()=>{
    handleKeyUp(event);
})