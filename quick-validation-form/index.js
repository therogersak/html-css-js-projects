const ele = document.querySelectorAll(".input");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

ele.forEach((el) => {
  el.addEventListener("blur", (e) => {
    if (e.target.value != "") {
      e.target.nextElementSibling.classList.add("filled");
    } else {
      e.target.nextElementSibling.classList.remove("filled");
    }
  });
});

function validate(e) {
  e.preventDefault();

  if (!username.value && !email.value && !password.value) {
    alert("please fil this!");
    return false;
  }

  return true;
}

const eye = document.getElementById("eyeIcon");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye.className = "ri-eye-off-line"
  } else {
    password.type = "password";
    eye.className = "ri-eye-line"
  }
});
