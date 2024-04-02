let input = document.getElementById("passInput");
let eyeIcon = document.getElementById("eyeIcon");
eyeIcon.onclick = () => {
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.src = "eye-open.png";
  } else {
    input.type = "password";
    eyeIcon.src = "eye-close.png";
  }
};
