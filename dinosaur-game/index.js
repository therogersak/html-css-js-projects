const dino = document.querySelector(".dino");
const monster = document.querySelector(".monster");

function jump() {
  if (dispatchEvent.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}

let checkAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue('left'));

  if(monsterLeft > 0 && monsterLeft < 70 && dinoTop >= 143){
    dino.style.animationPlayState = 'paused';
    monster.style.animationPlayState= 'paused';
    alert('Whoops! Game Over');
    window.location.reload();
  }
},10);
 
document.addEventListener('keydown', (e) => {
    jump()
})