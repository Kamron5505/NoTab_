document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name && email && password) {
    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    alert("Регистрация прошла успешно!");

    window.location.href = "about.html";
  } else {
    alert("Пожалуйста, заполните все поля!");
  }
});
