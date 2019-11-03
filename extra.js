let nota1 = Number(prompt("Ingrese nota correspondiente al TP 1"));
nota1 != Number && (nota1 = prompt("Por favor, ingrese un número"));

let nota2 = prompt("Ingrese nota correspondiente al TP 2");
nota2 != Number && (nota2 = prompt("Por favor, ingrese un número"));

let nota3 = prompt("Ingrese nota correspondiente al TP 3");
nota3 != Number && (nota3 = prompt("Por favor, ingrese un número"));

let sumaNotas = Number(nota1) + Number(nota2) + Number(nota3);
let promedio = sumaNotas / 3;
let notaFinal = "";

promedio > 90 && (notaFinal = "EXCELENTE");
(promedio <= 90 && promedio > 70) && (notaFinal = "MUY BUENO");
(promedio <= 70 && promedio > 60) && (notaFinal = "BUENO");
(promedio <= 60 && promedio > 40) && (notaFinal = "REGULAR");
promedio <= 40 && (notaFinal = "INSUFICIENTE");

alert(`El promedio de notas es ${notaFinal}`);