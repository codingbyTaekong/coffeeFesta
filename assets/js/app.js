let count = 0;
let particel = document.querySelector('.particle');

function animationParticle() {
    if (count === 58) {
        count = 0;
    } else {
        count++;
    }
    particel.src = `./assets/src/particle/${count+1}.png`;
}

setInterval(()=>{
    animationParticle()
}, 45)