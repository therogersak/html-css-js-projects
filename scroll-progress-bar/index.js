const scrollProgress = document.querySelector(".scroll-progress-bar");

const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop)
  scrollProgress.style.width = `${
    (scrollTop / height) * 100
  }%`;
});
