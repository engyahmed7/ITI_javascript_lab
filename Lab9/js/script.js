// adjust design
function updateFormWidth() {
    var loginForm = document.getElementById('login-form');
    
    if (window.innerWidth <= 992) {
      // For medium screens (<= 992px)
      loginForm.classList.remove('w-25');
      loginForm.classList.add('w-100');
    }
    else {
      // For large screens (> 992px)
      loginForm.classList.remove('w-100');
      loginForm.classList.add('w-25');
    }

  }
  window.addEventListener('resize', updateFormWidth);
  
//////////////////////////////////////////////////////////////////////

var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var form = document.getElementById("form");
var output = document.getElementById("output");

form.addEventListener("submit", function(e) {
    var username = usernameInput.value;
    var password = passwordInput.value;

    var errorMessages = "";

    if (username == "") {
        errorMessages += "Please enter your username.<br>";
    } else {
        let regex = /^[a-zA-Z0-9\s]+$/;
        if (regex.test(username) === false) {
            errorMessages += "Please enter a valid username.<br>";
        }
    }

    if (password == "") {
        errorMessages += "Please enter your password.<br>";
    } else {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (regex.test(password) === false) {
            errorMessages += "Please enter a valid password.<br>";
        }
    }

    if (errorMessages == "") {
        output.classList.add("alert");
        output.classList.add("alert-success");
        output.classList.remove("alert-danger");
        output.innerHTML = "Login successful!";
    } else {
        output.classList.add("alert");
        output.classList.add("alert-danger");
        output.classList.remove("alert-success");
        output.innerHTML = errorMessages;
    }

    console.log(errorMessages);

    e.preventDefault();
});
