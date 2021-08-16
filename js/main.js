var Nombre = prompt("Cual es tu nombre?");
var theMatrix = prompt("¿Cuál es la película protagonizada por Keanue Reeves donde lucha contra el código informático?");
var irobot = prompt("¿Cuál es la película en la que Will Smith lucha contra los robots?");
var lostShow = prompt("¿Puedes nombrar el programa de televisión en el que Desmond usa una computadora para salvar la isla y, en última instancia, el mundo?");
var watchDogs = prompt("¿Puedes nombrar el videojuego en el que pirateas el mundo para cometer varios delitos?");
var respuestasCorrectas = 0;
if (Nombre != " ") {
    respuestasCorrectas += 1;
  document.write("<p>CORRECT " + Nombre + "</p>");
}
if (theMatrix.toUpperCase() == "THE MATRIX" || theMatrix.toUpperCase() == "MATRIX") {
    respuestasCorrectas += 1;
  document.write("<p>CORRECT " + theMatrix + "</p>");
}
if (irobot.toUpperCase() == "I ROBOT" || irobot.toUpperCase() == "IROBOT") {
    respuestasCorrectas += 1;
  document.write("<p>CORRECT " + irobot + "</p>");
}

if (lostShow.toUpperCase() == "LOST") {
    respuestasCorrectas += 1;
  document.write("<p>CORRECT " + lostShow + "</p>");
}
if (watchDogs.toUpperCase() == "WATCHDOGS" || watchDogs.toUpperCase() == "WATCH DOGS") {
    respuestasCorrectas += 1;
  document.write("<p>CORRECT " + watchDogs + "</p>");
}
var Nivel = 0;
if (respuestasCorrectas == 5) {
  Nivel = "Oro"; 
} else if (respuestasCorrectas >= 3 && respuestasCorrectas < 5 ) {
  Nivel = "Plata";
} else if ( respuestasCorrectas >= 1 && numberCorrect < 3) {
  Nivel = "Bronce"
}

else {
  Nivel = "Nulo"; 
}

document.write("<h2> Sacaste " + respuestasCorrectas  + " "  + "respuestas correctas entonces obtuviste el nivel de"+ " "  +  Nivel + " Felicitaciones!!.</h2>");