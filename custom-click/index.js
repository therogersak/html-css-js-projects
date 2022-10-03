document.addEventListener("click", (e) => {
  const circle = document.createElement("span");
  circle.className = "circle";

  circle.style.top = `${e.clientY - 10}px `;
  circle.style.left = `${e.clientX - 10}px`;

  document.body.append(circle);

  setInterval(() => {
    circle.remove();
  }, 900);
});
