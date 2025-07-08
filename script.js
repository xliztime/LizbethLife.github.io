function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = "lavitachebrilla"; // puoi cambiarla con la tua password personale

  if (password === correctPassword) {
    window.location.href = "secret.html"; // porta alla tua area personale
  } else {
    document.getElementById('error').textContent = "Password sbagliata 😔";
  }
}
