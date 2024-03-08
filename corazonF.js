
var numberOfNoClicks = 0;
function changeHeartColor(heartIconId) {
    
    var heartIcon = document.getElementById(heartIconId);
    var colors = ["red", "blue", "green", "purple", "orange"]; // Colores disponibles
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Selecciona un color aleatorio
    heartIcon.style.color = randomColor; // Cambia el color del corazón
}

// Cambiar automáticamente el color de los corazones cada 500 milisegundos (medio segundo)
setInterval(function() {
    changeHeartColor("heartIcon1");
    changeHeartColor("heartIcon2");
    changeHeartColor("heartIcon3");
    changeHeartColor("heartIcon4");
    changeHeartColor("heartIcon5");
}, 500);

// Función para mostrar la carita triste y hacer crecer el botón de "Sí"
function showSadFaceAndEnlargeYesButton() {
    var sadFace = document.getElementById("sadFace");
    // sadFace.style.display = "block"; // Muestra la carita triste

    var yesButton = document.getElementById("yesButton");
    yesButton.style.transform = "scale(" + (1 + numberOfNoClicks * 0.1) + ")"; // Aumenta el tamaño del botón "Sí" con cada clic en "No"
    
    numberOfNoClicks++; // Incrementa el contador de clics en "No"
}
function showLoveContent() {
    var roseBouquet = document.getElementById("roseBouquet");
    var heartEyesFace = document.getElementById("heartEyesFace");
    var loveText = document.getElementById("loveText");

    roseBouquet.style.display = "block"; // Muestra el ramo de rosas
    heartEyesFace.style.display = "block"; // Muestra la carita con corazones en los ojos
    loveText.style.display = "block"; // Muestra el texto "Te amo"
}



// Event listener para el botón "No"
document.getElementById("noButton").addEventListener("click", showSadFaceAndEnlargeYesButton);
document.getElementById("yesButton").addEventListener("click", showLoveContent);
