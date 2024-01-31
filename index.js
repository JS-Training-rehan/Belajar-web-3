const dataJSON = fs.readFileSync("./index.json", "utf-8");
const data = JSON.parse(data);

// document = halaman web
$(document).ready(() => {
  $(".container-login").show();
  $(".container-regist").hide();
  $(".container-home").hide();

  //tombol login ke halaman utama
  $(".button-login").on("click", (event) => {
    function getEmail(value) {
      let email = document.getElementById("email");
      let emailUser = email.value;

      data.forEach((element) => {
        if (element.email !== emailUser) {
          alert("email belum terdaftar");
        } else {
          function getPass(value) {
            let password = document.getElementById("password");
            let passUser = password.value;

            data.forEach((element) => {
              if (element.password !== passUser) {
                alert("password salah");
              } else {
                $(".container-login").hide();
                $(".container-regist").hide();
                $(".container-home").show();
                $(".button-logout").on("click", (event) => {
                  $(".container-regist").hide();
                  $(".container-login").show();
                  $(".container-home").hide();
                });
              }
            });
          }
        }
      });
    }
  });

  //tombol belum punya akun
  $(".button-regist").on("click", (event) => {
    $(".container-login").hide();
    $(".container-regist").show();
    $(".container-home").hide();
    //tombol buat akun
    $(".buat-akun").on("click", (event) => {
      $(".container-regist").hide();
      $(".container-login").show();
      $(".container-home").hide();
    });
    //tombol sudah punya akun
    $(".punya-akun").on("click", (event) => {
      $(".container-regist").hide();
      $(".container-login").show();
      $(".container-home").hide();
    });
  });
});
