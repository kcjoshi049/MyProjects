document.querySelector(".signup").addEventListener("click", () => {

    document.querySelector(".sub").children[0].value = "Sign Up";
    document.querySelector(".signup").style.borderTop = "3px solid green";
    document.querySelector(".login").style.borderTop = "1px solid rgba(0, 0, 0, 0.18)";
    document.querySelector(".signup").style.backgroundColor = "white";
    document.querySelector(".login").style.backgroundColor = "rgba(0, 0, 0, 0)"

    document.querySelector(".usermail").firstElementChild.src = "envelope-fill.svg";
    document.getElementById("mail").placeholder = "E-mail";

    document.querySelector(".rem").style.display = "none";
    document.querySelector(".robot").style.display = "flex";
    document.querySelector(".institute").style.display = "flex";

    document.getElementById("mail").type = "email";

    document.getElementsByTagName("form")[0].action = "https://signup.com/login"
    document.getElementById("ins").required = true;
});
document.querySelector(".login").addEventListener("click", () => {
    document.querySelector(".sub").children[0].value = "Sign In";
    document.querySelector(".login").style.borderTop = "3px solid green";
    document.querySelector(".signup").style.borderTop = "1px solid rgba(0,0,0,0.18)";
    document.querySelector(".login").style.backgroundColor = "white";
    document.querySelector(".signup").style.backgroundColor = "rgba(0, 0, 0, 0)";

    document.querySelector(".usermail").firstElementChild.src = "person-circle.svg";
    document.getElementById("mail").placeholder = "Username or E-mail"

    document.querySelector(".rem").style.display = "flex";
    document.querySelector(".robot").style.display = "none";
    document.querySelector(".institute").style.display = "none";

    document.getElementById("chitti").style.display = "";
    document.getElementById("loader").style.display = "none";

    let a = document.forms['MyForm']['usermail'].value;
    if(a.match(/[]/))
    
    document.getElementsByTagName("form")[0].action = "https://signin.com/login";
    document.getElementById("ins").required = false;
    document.getElementById("robovalid").style.display = "none";
});

document.querySelector(".img2").addEventListener("click", () => {
    if (document.getElementById("pass").type == "password") {
        document.getElementById("pass").type = "text";
        document.querySelector(".img2").src = "eye-fill.svg";
    }
    else {
        document.querySelector(".img2").src = "eye-slash-fill.svg";
        document.getElementById("pass").type = "password";
    }
});

document.getElementById("chitti").addEventListener("click", () => {
    document.getElementById("chitti").style.display = "none";
    document.getElementById("loader").style.display = "block";
    setTimeout(()=>{
        document.getElementById("loader").style.display = "none";
        document.getElementById("robovalid").style.display = "inline";
    },3000);
})