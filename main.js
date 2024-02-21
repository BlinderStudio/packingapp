function changeBackgroundColor() {
  // Colores disponibles
  var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
  
  // Escoge un color aleatorio
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Cambia el color de fondo de la página
  document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 5000);
