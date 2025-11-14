// Obtener elementos del formulario
const form = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

// Validación del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email");
  let valid = true;

  // Validar email
  if (!email.value.includes("@")) {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.remove("is-invalid");
  }

  // Validar contraseña
  if (password.value.trim() === "") {
    password.classList.add("is-invalid");
    valid = false;
  } else {
    password.classList.remove("is-invalid");
  }

  // Si todo es válido
  if (valid) {
    alert("Signed in successfully!");
    form.reset();
  }
});

// Mostrar / ocultar contraseña
togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Cambiar icono si tienes dos imágenes
  if (type === "password") {
    this.src = "../img/ojoabierto.png"; // ojo abierto
  } else {
    this.src = "../img/ojocerrado.png"; // ojo cerrado (opcional)
  }
});

    
  