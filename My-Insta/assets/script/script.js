// alert(document.getElementById("password"));
var password = document.getElementById("password")
var btn_state = document.getElementById("show")

// if(password.innerHTML)

btn_state.onclick = () => {
    btn_state.innerHTML === "Afficher" ? btn_state.innerHTML = "Masquer" : btn_state.innerHTML = "Afficher"
    password.getAttribute("type") === "password" ? password.setAttribute("type", "text") : password.setAttribute("type", "password")
}
    

