(function(window, document, location){
    let userName = document.querySelector(`input[type="text"]`);
    let userMail = document.querySelector(`input[type="email"]`);
    let userPassword = document.querySelector(`input[name="pass"]`);
    let confirmedPassword = document.querySelector(`input[name="confirmed_pass"]`)
    let mailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let loginButton = document.querySelector(`input[name="login"]`);
    let errorBox = document.getElementById("Error");
    document.querySelector(`input[name="signup"]`).addEventListener("click", () => {
        // event.preventDefault();
        // console.log(userMail.value.match(mailFormat));
        // console.log(userPassword.value === confirmedPassword.value)
        // console.log(userPassword.value.length >= 8)
        // console.log(userName.value.length > 3)
        // console.log(localStorage.getItem("USERNAME") === null)
        // console.log()
        if(userMail.value.match(mailFormat) && userPassword.value === confirmedPassword.value && userPassword.value.length >= 8 && userName.value.length > 3 && localStorage.getItem("USERNAME") === null)
        {
            localStorage.setItem("USERNAME", userName.value);
            console.log(userName.value);
            localStorage.setItem("EMAIL", userMail.value);
            console.log(userMail.value);
            localStorage.setItem("PASSWORD", userPassword.value);
            console.log(userPassword.value);
            console.log("true");
            document.forms[0].submit();
        }
    });
    loginButton.addEventListener("click", () => {
        location.href = "signin.html";
    });
    userName.addEventListener("keyup", () => {
        if(userName.value.length > 3)
        {
            userName.style.borderColor = "green";
            errorBox.innerHTML = "";

        }
        else
        {
            userName.style.borderColor = "red";
            errorBox.innerHTML = "Username must be more than 3 characters".fontcolor("crimson");
        }
        
    });
    userMail.addEventListener("keyup", () => {
        if(userMail.value.match(mailFormat))
        {     
            userMail.style.borderColor = "green";
            errorBox.innerHTML = "";
        }
        else
        {
            userMail.style.borderColor = "red";
            errorBox.innerHTML = "Email Not Valid".fontcolor("crimson");
        }
    });
    userPassword.addEventListener("keyup", () => {
        if(userPassword.value.length >= 8)
        {
            userPassword.style.borderColor = "green";
            errorBox.innerHTML = "";
        }
        else
        {
            userPassword.style.borderColor = "red";
            errorBox.innerHTML = "Password must be more than 7 characters".fontcolor("crimson");
        }
    });
    confirmedPassword.addEventListener("keyup", () => {
        if(confirmedPassword.value === userPassword.value)
        {
            confirmedPassword.style.borderColor = "green";
            errorBox.innerHTML = "";
        }
        else
        {
            confirmedPassword.style.borderColor = "red";       
            errorBox.innerHTML = "Confirm Password must be equal to Password".fontcolor("crimson");
        }
    });
})(window, document, location);