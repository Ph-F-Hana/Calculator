let obj = (function(window, document){

    let answer = document.getElementById("Answer");
    let formula = document.getElementById("Formula");
    let operatorValidation = ["+", "-", "*", "/"];
    let numberValidation = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let confirmValidation = ["Enter", "="];
    let signoutButton = document.querySelector(`input[name="signout"]`);
    
    if(!(localStorage.getItem("AUTHENTICATION") === "VALID"))
    location.replace("signin.html");
    function EnterNumber(number)
    {
        answer.value = "";
        formula.value += number;
    }
    function EnterEqual()
    {
        if(formula.value.length && !operatorValidation.includes(formula.value.substring(formula.value.length-1, formula.value.length)))
        {
            answer.value = eval(formula.value);
        }
    }
    function EnterOperator(operator)
    {
        answer.value = "";
        if(!(formula.value.length) == 0 && !operatorValidation.includes(formula.value.substring(formula.value.length-1, formula.value.length)))
        formula.value += operator;
    }
    function EnterClear()
    {
        formula.value = "";
        answer.value = "";
    }
    
    document.addEventListener("keypress", (event) => {
        answer.value = "";
        if(numberValidation.includes(event.key))
        EnterNumber(event.key);
        else if(operatorValidation.includes(event.key))
        EnterOperator(event.key);
        else if(confirmValidation.includes(event.key))
        EnterEqual();
    });
    document.onkeydown = function(event)
    {
        event = event||window.event;
        if(event.keyCode == 27)
        {
            formula.value = "";
            answer.value = "";
        }
        else if(event.keyCode == 8)
        {
            formula.value = formula.value.substring(0,formula.value.length-1);
            answer.value = "";
        }
    }
    
    formula.addEventListener("focus", () => {
        formula.blur();
    });
    answer.addEventListener("focus", () => {
        answer.blur();
    });
    
    signoutButton.addEventListener("click", () => {
        localStorage.removeItem("AUTHENTICATION");
        location.replace("signin.html");
    });
    return {
        EnterOperator,
        EnterNumber,
        EnterEqual,
        EnterClear
    };
})(window, document);