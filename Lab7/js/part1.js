var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");

var output = document.getElementById("output");

loginBtn.addEventListener("click", function(){
    event.preventDefault();
    var login = {
        username: usernameInput.value,
        password: passwordInput.value
    }

    if(login.username === "admin" && login.password === "123"){
        output.innerHTML = "Welcome";
    } else {
        output.innerHTML = "Not registered";
    }
});

