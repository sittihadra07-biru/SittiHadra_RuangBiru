// Validasi form login di sisi browser (bukan autentikasi sungguhan)
const form = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");
const pesan = document.getElementById("pesan");
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function tampilkanPesan(jenis, teks) {
  pesan.className = "alert alert-" + jenis;
  pesan.textContent = teks;
}

function setError(input, idError, teks) {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  document.getElementById(idError).textContent = teks;
}

function setValid(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah form diproses
  let valid = true;

  if (email.value.trim() === "") {
    setError(email, "errEmail", "Email tidak boleh kosong.");
    valid = false;
  } else if (!polaEmail.test(email.value.trim())) {
    setError(email, "errEmail", "Format email tidak valid, contoh: nama@contoh.com.");
    valid = false;
  } else {
    setValid(email);
  }

  if (password.value === "") {
    setError(password, "errPassword", "Kata sandi tidak boleh kosong.");
    valid = false;
  } else if (password.value.length < 8) {
    setError(password, "errPassword", "Kata sandi minimal 8 karakter.");
    valid = false;
  } else {
    setValid(password);
  }

  if (valid) {
    tampilkanPesan("success", "Validasi berhasil. Selamat datang kembali!");
  } else {
    tampilkanPesan("danger", "Login gagal. Periksa kembali isian yang ditandai merah.");
  }
});
