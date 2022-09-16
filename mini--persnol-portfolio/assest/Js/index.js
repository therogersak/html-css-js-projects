const themeBtn = document.querySelector(".theme-toogle");
const projectsBtn = document.getElementById("projects-btn");
const skillsBtn = document.getElementById("skills-btn");
const projects = document.getElementById("projects");
const skills = document.getElementById("skills");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("theme");

  if (document.body.classList.contains("theme")) {
    document.getElementById("theme-icon").className = "bx bx-sun";
  } else {
    document.getElementById("theme-icon").className = "bx bx-moon";
  }
});

skillsBtn.addEventListener("click", () => {
  skillsBtn.classList.add("active");
  projectsBtn.classList.remove("active");
  skills.classList.add("active-show");
  projects.classList.remove("active-show");
  projects.classList.add('active-hide');
});

projectsBtn.addEventListener("click", () => {
  skillsBtn.classList.remove("active");
  projectsBtn.classList.add("active");
  projects.classList.add("active-show");
  skills.classList.add('active-hide');
  skills.classList.remove('active-show');

});
