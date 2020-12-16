var obj = 
(function(window, document, location){
    let userName = document.querySelector(`input[type="text"]`);
    let userPassword = document.querySelector(`input[type="password"]`);
    let signupButton = document.querySelector(`input[value="singup"]`);
    let errorBox = document.getElementById("Error");
    document.querySelector(`input[name="login"]`).addEventListener("click", () => {
        if(userName.value === localStorage.getItem("USERNAME") && userPassword.value  === localStorage.getItem("PASSWORD"))
        {
            localStorage.setItem("AUTHENTICATION", "VALID");
            document.forms[0].submit();
        }
        else{
            errorBox.innerHTML = "Username or Password is wrong".fontcolor("crimson");
            userName.style.borderColor = "red";
            userPassword.style.borderColor = "red";
        }
    });
    window.addEventListener("keyup", () => {
        errorBox.innerHTML = "";
        userName.style.borderColor = "";
        userPassword.style.borderColor = "";
    });
    signupButton.addEventListener("click", () => {
        location.href = "signup.html";
    });
})(window, document, location);