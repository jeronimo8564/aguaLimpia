// Obtén referencias a los elementos HTML relevantes
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var totalDisplay = document.getElementById('total');

// Inicializa el contador y el total
var contador = 0;
var total = 0;

// Agrega event listeners a los botones
btn1.addEventListener('click', sumarNumero.bind(null, 10));
btn2.addEventListener('click', sumarNumero.bind(null, 25));
btn3.addEventListener('click', sumarNumero.bind(null, 50));

// Función para sumar un número al total y actualizar la visualización
function sumarNumero(numero) {
  contador++;
  total += numero;
  totalDisplay.textContent = total;
  console.log('Contador:', contador);
  console.log('Total:', total);
}
