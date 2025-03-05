function signup() {
  const email = document.getElementById("emailaddress").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  const firstname = document.getElementById("firstname").value;
  const surname = document.getElementById("surname").value;
  if (email.length >= 3) {
    // frag Tom
    if (email.length > 1 && password.length > 1 && password2.length > 1 && firstname.length > 1 && surname.length > 1) {
      alert("true")
    } else {
      alert("false")
    }
  } else {
    alert("Invalid email")
  }
}