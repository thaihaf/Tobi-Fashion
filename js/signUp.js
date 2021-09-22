var button = document.getElementsByClassName("submit");
button.onClick = function () {
  var pass = document.getElementsByClassName("password");
  var rePass = document.getElementsByClassName("rePassword");

  if (pass != rePass) {
    alert('Mật khẩu chưa khớp');
  }
};
