function kirimData() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = "sayaganteng";
  const pass = 12345;

  if (username == "" || password == "") {
    alert("username dan password tidak boleh kosong!");
  } else if (username != user || password != pass) {
    alert("username dan password salah!");
  } else {
    alert("Login berhasil!");
  }
}
