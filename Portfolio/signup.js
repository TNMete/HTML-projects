function signup() {
  const email = document.getElementById("emailaddress").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  const firstname = document.getElementById("firstname").value;
  const surname = document.getElementById("surname").value;
  if (email.length >= 3) {
    if (email && password && password2 && firstname && surname) {
      if (password === password2) {
        alert("Your passwords don't match")
      } else {
        alert("true")
      }
    } else {
      alert("false")
    }
  } else {
    alert("Invalid email")
  }
}