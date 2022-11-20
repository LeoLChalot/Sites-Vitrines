// alert(document.getElementById("password"));
var password = document.getElementById("password")
var password_value = document.getElementById("password").value
var btn_state = document.getElementById("show")

btn_state.onclick = () => {
    btn_state.innerHTML === "Afficher" ? btn_state.innerHTML = "Masquer" : btn_state.innerHTML = "Afficher"
    password.getAttribute("type") === "password" ? password.setAttribute("type", "text") : password.setAttribute("type", "password")
}

function notification() {
    alert("Affichera les différentes notifications")
}
function home() {
    alert("Retour page Home")
}
function decouvrir() {
    alert('Affichera la page des posts "tendance"')
}
function publier() {
    alert("Affichera le back office de publication de photos")
}
function message() {
    alert("Permettra d'accéder à la liste des messages privés")
}
function user() {
    alert("Permettra d'accéder à notre page personnelle")
}

