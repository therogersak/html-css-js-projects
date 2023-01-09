const title = document.title;

window.addEventListener("blur", () => {
  document.title = "Hey ComeBack:💚";
});

window.addEventListener("focus", () => {
  document.title = title;
});
