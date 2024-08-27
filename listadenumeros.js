//lista-de-numeros
const $botonDeCalcular = document.querySelector("#boton-de-calcular");
$botonDeCalcular.onclick = function () {
  const $listaDeNumeros = document.querySelectorAll(".lista-de-numeros li");

  function calcularMaximo($listaDeNumeros) {
    let maximo = 0;

    for (let i = 0; i < $listaDeNumeros.length; i++) {
      if ($listaDeNumeros[i].innerText > maximo) {
        maximo = $listaDeNumeros[i].innerText;
      }
    }
    return maximo;
  }
  let valorMaximo = calcularMaximo($listaDeNumeros);
  document.querySelector(
    "#mayor-numero"
  ).innerText = `El mayor numero es ${valorMaximo}`;
  function calcularMinimo($listaDeNumeros) {
    let minimo = 10;

    for (let i = 0; i < $listaDeNumeros.length; i++) {
      if ($listaDeNumeros[i].innerText < minimo) {
        minimo = $listaDeNumeros[i].innerText;
      }
    }
    return minimo;
  }
  let valorMinimo = calcularMinimo($listaDeNumeros);

  document.querySelector(
    "#menor-numero"
  ).innerText = `El menor numero es ${valorMinimo}`;

  function calcularPromedio($listaDeNumeros) {
    let sumar = 0;
    for (let i = 0; i < $listaDeNumeros.length; i++) {
      sumar += Number($listaDeNumeros[i].innerText);
    }
    return sumar / $listaDeNumeros.length;
  }
  let promedio = calcularPromedio($listaDeNumeros);
  document.querySelector(
    "#calcular-promedio"
  ).innerText = `El promedio es ${promedio}`;

  function calcularRepetido($listaDeNumeros) {
    let numeroRepetido;
    let repeticionMaxima = 0;
    for (let i = 0; i < $listaDeNumeros.length; i++) {
      let constRepeticion = 0;

      for (let x = 0; x < $listaDeNumeros.length; x++) {
        if ($listaDeNumeros[x].innerText == $listaDeNumeros[i].innerText) {
          constRepeticion++;
        }
        if (constRepeticion > repeticionMaxima) {
          repeticionMaxima = constRepeticion;
          numeroRepetido = $listaDeNumeros[x].innerText;
        }
      }
    }
    return numeroRepetido;
  }

  let valorRepetido = calcularRepetido($listaDeNumeros);
  document.querySelector(
    "#numero-repetido"
  ).innerText = `el numero repetido es ${valorRepetido}`;
};
