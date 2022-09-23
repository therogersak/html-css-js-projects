const button = document.querySelector(".hero button");
const svg = document.getElementById("svg");

const animItem = bodymovein.loadAnimation({
  wrapper: svg,
  animItem: "svg",
  loop: false,
  path: "https://assets9.lottiefiles.com/packages/1f20_rovf9gzu.json",
});

button.addEventListener("click", () => {
  animItem.goToAndPlay(0, true);
});
